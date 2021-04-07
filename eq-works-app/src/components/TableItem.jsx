import format from "date-fns/format";

export default function TableItem({
  id,
  date,
  events,
  current,
  impressions,
  clicks,
  revenue,
  name,
  poi_id,
  lat,
  lon,
  HOURLYSTATS,
  HOURLYEVENTS,
  POI,
}) {
  return (
    <tr>
      <td>{id}</td>
      {[HOURLYEVENTS, HOURLYSTATS].includes(current) && (
        <td>{format(date, "MM/dd/yyyy")}</td>
      )}
      {current === HOURLYEVENTS && (
        <>
          <td>{format(date, "hh aaaa")}</td>
          <td>{events}</td>
        </>
      )}
      {current === HOURLYSTATS && (
        <>
          <td>{impressions}</td>
          <td>{clicks}</td>
          <td>{`$${Math.round(revenue * 100) / 100}`}</td>
        </>
      )}
      {current === POI && (
        <>
          <td>{poi_id}</td>
          <td>{name}</td>
          <td>{lat}</td>
          <td>{lon}</td>
        </>
      )}
    </tr>
  );
}
