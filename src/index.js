import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { StateProvider } from "./reducer/StateProvider";
import { INITIAL_STATE, Reducer } from "./reducer/Reducer";

ReactDOM.render(
  <>
    <StateProvider reducer={Reducer} intialState={INITIAL_STATE}>
      <App />
    </StateProvider>
  </>,
  document.getElementById("root")
);
