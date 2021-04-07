import { useState } from "react";
import "./styles/App.scss";
import useApplicationData from "../hooks/useAppData";
import SideBar from "./Sidebar";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import Map from "./Map";

const CHART = "CHART";
const DASHBOARD = "DASHBOARD";
const MAP = "MAP";

function App() {
  const { state } = useApplicationData();
  const [view, setView] = useState(CHART);
  return (
    // add a loader until data has been fetched
    <>
      <SideBar
        setView={setView}
        CHART={CHART}
        DASHBOARD={DASHBOARD}
        MAP={MAP}
      />
      {view === CHART && <Chart state={state} />}
      {view === DASHBOARD && <Dashboard {...state} />}
      {view === MAP && <Map />}
    </>
  );
}

export default App;
