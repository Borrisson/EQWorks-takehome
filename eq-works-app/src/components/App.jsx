import { useState } from "react";
import ReactLoading from "react-loading";
import "./styles/App.scss";
import useApplicationData from "../hooks/useAppData";
import SideBar from "./Sidebar";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import Map from "./Map/Map";

const CHART = "CHART";
const DASHBOARD = "DASHBOARD";
const MAP = "MAP";

function App() {
  const { state } = useApplicationData();
  const [view, setView] = useState(CHART);
  return (
    <>
      <SideBar
        setView={setView}
        CHART={CHART}
        DASHBOARD={DASHBOARD}
        MAP={MAP}
      />
      {state.loading && (
        <ReactLoading
          className="centered"
          type="bars"
          color="grey"
          height="25%"
          width="25%"
        />
      )}
      {view === CHART && !state.loading && <Chart state={state} />}
      {view === DASHBOARD && !state.loading && <Dashboard {...state} />}
      {view === MAP && !state.loading && <Map />}
    </>
  );
}

export default App;
