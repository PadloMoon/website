import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Poker from "./routes/Poker/Poker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poker" element={<Poker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
