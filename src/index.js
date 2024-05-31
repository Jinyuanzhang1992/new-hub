import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
// import Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>
);
