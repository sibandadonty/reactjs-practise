import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorite-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);
