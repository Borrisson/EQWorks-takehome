import format from "date-fns/format";

export default function TableItem({
  id,
  date,
  events,
  current,
  HOURLYSTATS,
  HOURLYEVENTS,
  POI,
}) {
  return (
    <tr>
      <td>{id}</td>
      {[HOURLYEVENTS, HOURLYSTATS].includes(current) && (
        <>
          <td>{format(date, "MM/dd/yyyy")}</td>
          <td>{format(date, "hh aaaa")}</td>
        </>
      )}
      {current === HOURLYEVENTS && <td>{events}</td>}
    </tr>
  );
}
