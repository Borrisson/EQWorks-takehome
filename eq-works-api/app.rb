require "dotenv/load"
require "sinatra"
require "sinatra/json"
require "pg"
require "redis"
REDIS = Redis.new

before do
  throttle
end

get "/" do
  "Welcome to EQ Works 😎"
end

get "/events/hourly" do
  json query_helper "" "
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
    LIMIT 168;
  " ""
end

get "/events/daily" do
  json query_helper "" "
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
    LIMIT 42;
  " ""
end

get "/stats/hourly" do
  json query_helper "" "
    SELECT date, hour, impressions, clicks, revenue
    FROM public.hourly_stats
    ORDER BY date, hour
    LIMIT 168;
  " ""
end

get "/stats/daily" do
  json query_helper "" "
    SELECT date,
      SUM(impressions) AS impressions,
      SUM(clicks) AS clicks,
      SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  " ""
end

get "/poi" do
  json query_helper "" "
    SELECT *
    FROM public.poi;
  " ""
end

private

def throttle
  client_ip = request.env["REMOTE_ADDR"]
  key = "count:#{client_ip}"
  count = REDIS.get(key)

  unless count
    REDIS.set(key, 0)
    REDIS.expire(key, ENV["THROTTLE_TIME_WINDOW"].to_i)
    return true
  end

  if count.to_i >= ENV["THROTTLE_MAX_REQUESTS"].to_i
    halt 429, { "Content-Type" => "text/plain" }, "You have reached you're maximum api requests of #{ENV["THROTTLE_MAX_REQUESTS"]}. You will need to wait until #{Time.at(Time.now.to_i + REDIS.ttl(key))} in order for it to reset"
  end
  REDIS.incr(key)
  true
end

def query_helper(query)
  res = []

  begin
    # configs come from standard PostgreSQL env vars
    # https://www.postgresql.org/docs/9.6/static/libpq-envars.html
    conn = PG.connect
    rows = conn.exec query

    rows.each do |row|
      res.push row
    end
  ensure
    conn.close if conn
  end

  res
end
