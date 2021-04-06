import "./styles/App.scss";
import useApplicationData from "../hooks/useAppData";
import SideBar from "./Sidebar";
import Chart from "./Chart";

function App() {
  const { state } = useApplicationData();
  return (
    <>
      <SideBar />
      <Chart />
    </>
  );
}

export default App;
