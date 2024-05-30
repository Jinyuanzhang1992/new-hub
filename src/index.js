import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "../src/App/App";
// import Bootstrap CSS&JS files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
||||||| 20fef63
import "./index.css";
import App from "../src/App/App";
// import reportWebVitals from "./reportWebVitals";
=======
import "./index.scss";
import App from "./components/app/App";
// import Bootstrap CSS&JS files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
>>>>>>> feat/CP-10-create-layout

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>
);
