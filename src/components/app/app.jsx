import React from "react";
import propTypes from "prop-types";
import {Main} from "../main/main";

export const App = (props) => {
  const {rentCount} = props;
  return <Main rentCount = {rentCount}/>;
};

App.propTypes = {
  rentCount: propTypes.number.isRequired
};
