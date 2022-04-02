import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./slices/store";
import App from "./routes/App/App";
import Poker from "./routes/Poker/Poker";
import PokerRegistration from "./routes/PokerRegistration/PokerRegistration";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/poker" element={<Poker />} />
          <Route path="/poker-registration" element={<PokerRegistration />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
