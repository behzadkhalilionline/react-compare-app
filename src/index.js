import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Employees from "./pages/Employees";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Employees />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
