import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
// import Bootstrap CSS&JS files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>
);
