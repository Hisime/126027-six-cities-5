import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import Offers from "./mocks/offers";

const Settings = {
  RENT_COUNT: 312
};

ReactDOM.render(
    <App
      rentCount={Settings.RENT_COUNT}
      offers={Offers}
    />,
    document.getElementById(`root`)
);
