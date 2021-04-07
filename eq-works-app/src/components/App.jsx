import { useState } from "react";
import ReactLoading from "react-loading";
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
  console.log(state.loading);
  return (
    // add a loader until data has been fetched
    <>
      <SideBar
        setView={setView}
        CHART={CHART}
        DASHBOARD={DASHBOARD}
        MAP={MAP}
      />
      {}
      {view === CHART && !state.loading && <Chart state={state} />}
      {view === DASHBOARD && !state.loading && <Dashboard {...state} />}
      {view === MAP && !state.loading && <Map />}
    </>
  );
}

export default App;
