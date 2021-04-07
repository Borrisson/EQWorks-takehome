import format from "date-fns/format";

export default function TableItem({ id, date, events }) {
  const dateObj = new Date(date);
  return (
    <tr>
      <td>{id}</td>
      <td>{format(dateObj, "MM/dd/yyyy")}</td>
      <td>{format(date, "hh aaaa")}</td>
      <td>{events}</td>
    </tr>
  );
}
