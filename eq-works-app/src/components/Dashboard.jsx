import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import TableItem from "./TableItem";
import { useState, useLayoutEffect } from "react";
import format from "date-fns/format";
const HOURLYEVENTS = "hourlyEvents";
const HOURLYSTATS = "hourlyStats";
const POI = "poi";

export default function Dashboard(state) {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const [view, setView] = useState(HOURLYEVENTS);

  useLayoutEffect(() => {
    if (value) {
      const regex = new RegExp(value, "i");

      const filteredArray = state[view].filter((el) => {
        return Object.entries(el).filter(([key, value]) => {
          return regex.test(value);
        }).length;
      });
      setResults(filteredArray);
    } else {
      setResults(state[view]);
    }
  }, [value, view, state]);

  const parsedTableItem = results.map((el, id) => (
    <TableItem
      current={view}
      key={el.poi_id || el.date}
      id={id + 1}
      {...el}
      HOURLYEVENTS={HOURLYEVENTS}
      HOURLYSTATS={HOURLYSTATS}
      POI={POI}
    />
  ));

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Pagination className="mr-auto">
          <Pagination.Item
            key={HOURLYEVENTS}
            active={view === HOURLYEVENTS}
            onClick={() => {
              setView(HOURLYEVENTS);
              setResults(state[HOURLYEVENTS]);
            }}
          >
            Events
          </Pagination.Item>
          <Pagination.Item
            key={HOURLYSTATS}
            active={view === HOURLYSTATS}
            onClick={() => {
              setView(HOURLYSTATS);
              setResults(state[HOURLYSTATS]);
            }}
          >
            Stats
          </Pagination.Item>
          <Pagination.Item
            key={POI}
            active={view === POI}
            onClick={() => {
              setView(POI);
              setResults(state[POI]);
            }}
          >
            Points of Interest
          </Pagination.Item>
        </Pagination>

        <Form inline>
          <FormControl
            onChange={(event) => setValue(event.target.value)}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>

      <Table striped bordered hover className="dashboard">
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
            {view === POI && (
              <>
                <td>ID</td>
                <td>Name</td>
                <td>Latitude</td>
                <td>Longitude</td>
              </>
            )}
          </tr>
        </thead>
        <tbody>{parsedTableItem}</tbody>
      </Table>
    </>
  );
}
