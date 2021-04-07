import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import TableItem from "./TableItem";
import { useState } from "react";
const HOURLYEVENTS = "hourlyEvents";
const HOURLYSTATS = "hourlyStats";
const POI = "poi";

export default function Dashboard(state) {
  const [view, setView] = useState(HOURLYEVENTS);

  const parsedTableItem = state[view].map((el, id) => (
    <TableItem key={el.date} id={id} {...el} />
  ));

  return (
    <div className="dashboard">
      <Pagination>
        <Pagination.Item key={HOURLYEVENTS} active={view === HOURLYEVENTS}>
          Events
        </Pagination.Item>
        <Pagination.Item key={HOURLYSTATS} active={view === HOURLYSTATS}>
          Stats
        </Pagination.Item>
        <Pagination.Item key={POI} active={view === POI}>
          Points of Interest
        </Pagination.Item>
      </Pagination>

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
