import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";

const rentCount = 312;

ReactDOM.render(
    <App rentCount={rentCount}/>,
    document.getElementById(`root`)
);
