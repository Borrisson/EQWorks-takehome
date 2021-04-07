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
    <TableItem
      current={view}
      key={el.date}
      id={id}
      {...el}
      HOURLYEVENTS={HOURLYEVENTS}
      HOURLYSTATS={HOURLYSTATS}
      POI={POI}
    />
  ));

  return (
    <div className="dashboard">
      <Pagination className="mt-1 position-fixed">
        <Pagination.Item
          key={HOURLYEVENTS}
          active={view === HOURLYEVENTS}
          onClick={() => setView(HOURLYEVENTS)}
        >
          Events
        </Pagination.Item>
        <Pagination.Item
          key={HOURLYSTATS}
          active={view === HOURLYSTATS}
          onClick={() => setView(HOURLYSTATS)}
        >
          Stats
        </Pagination.Item>
        <Pagination.Item
          key={POI}
          active={view === POI}
          onClick={() => setView(POI)}
        >
          Points of Interest
        </Pagination.Item>
      </Pagination>

      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            {[HOURLYEVENTS, HOURLYSTATS].includes(view) && <th>Date</th>}
            {view === HOURLYEVENTS && (
              <>
                <th>Time</th>
                <th>Events</th>
              </>
            )}
            {view === HOURLYSTATS && (
              <>
                <td>Impressions</td>
                <td>Clicks</td>
                <td>Revenue</td>
              </>
            )}
          </tr>
        </thead>
        <tbody>{parsedTableItem}</tbody>
      </Table>
    </div>
  );
}
