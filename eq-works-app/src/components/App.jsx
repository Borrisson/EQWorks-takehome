import "./styles/App.scss";
import useApplicationData from "../hooks/useAppData";
import SideBar from "./Sidebar";

function App() {
  const { state } = useApplicationData();
  return <SideBar />;
}

export default App;
