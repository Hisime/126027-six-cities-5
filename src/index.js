import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";

const Settings = {
  RENT_COUNT: 312
};

ReactDOM.render(
    <App rentCount={Settings.RENT_COUNT}/>,
    document.getElementById(`root`)
);
