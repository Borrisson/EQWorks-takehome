import format from "date-fns/format";

export default function TableItem({ id, date, events }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{format(date, "MM/dd/yyyy")}</td>
      <td>{format(date, "hh aaaa")}</td>
      <td>{events}</td>
    </tr>
  );
}
