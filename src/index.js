import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Head } from "./components/head/head";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head modulo={"home"} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
