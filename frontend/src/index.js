/** @format */

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// apex-chart
import "./tutorDashboard/assets/third-party/apex-chart.css";
import { store } from "./tutorDashboard/store";
// scroll bar
import "simplebar/src/simplebar.css";
// third-party
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Router basename="/">
        <App />
      </Router>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root")
);
