import "./styles/App.scss";
import useApplicationData from "../hooks/useAppData";
import SideBar from "./Sidebar";
import Chart from "./Chart";

function App() {
  const { state } = useApplicationData();
  return (
    // add a loader until data has been fetched
    <>
      <SideBar />
      <Chart state={state} />
    </>
  );
}

export default App;
