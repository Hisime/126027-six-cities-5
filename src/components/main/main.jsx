import React from "react";
import propTypes from "prop-types";

export const Main = (props) => {
  const {rentCount} = props;
  return (<div> {rentCount} предложений аренды</div>);
};

Main.propTypes = {
  rentCount: propTypes.number.isRequired
};
