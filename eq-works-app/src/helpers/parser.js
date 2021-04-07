export function toTimestamp(data) {
  const timestring = data.hour ? `${data.date} ${data.hour}:00:00` : data.date;
  return Date.parse(timestring);
}
