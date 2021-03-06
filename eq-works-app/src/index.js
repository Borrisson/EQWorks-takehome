import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
