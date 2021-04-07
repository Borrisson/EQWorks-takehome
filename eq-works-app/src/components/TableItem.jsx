export default function TableItem({ id, date, events }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{events}</td>
    </tr>
  );
}
