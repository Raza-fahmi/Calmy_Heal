import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

axios.defaults.withCredentials = true;

const container = document.getElementById("root");
const root = createRoot(container);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
