import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";

export default function Dashboard(state) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>DateTime</th>
          <th>Events</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
}
