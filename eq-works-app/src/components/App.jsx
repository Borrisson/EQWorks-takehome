import "./App.scss";
import useApplicationData from "../hooks/useAppData";

function App() {
  const { state } = useApplicationData();
  return <p>hello</p>;
}

export default App;
