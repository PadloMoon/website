import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { store } from "./slices/store";
import App from "./routes/App/App";
import Poker from "./routes/Poker/Poker";
import PokerRegistration from "./routes/PokerRegistration/PokerRegistration";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./routes/Login/Login";
import { AUTH_TOKEN } from "./config/constants";

const httpLink = createHttpLink({
  uri: "http://localhost:3004",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/poker" element={<Poker />} />
            <Route path="/poker-registration" element={<PokerRegistration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
