import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import TableItem from "./TableItem";

export default function Dashboard(state) {
  const parsedTableItem = state.hourlyEvents.map((el, id) => (
    <TableItem key={el.date} id={id} {...el} />
  ));
  return (
    <div className="dashboard">
      <Pagination>{1}</Pagination>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>{parsedTableItem}</tbody>
      </Table>
    </div>
  );
}
