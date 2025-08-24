/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SubwayTick = ({
  className,
  subwayTick = "/img/subway-tick.png",
}) => {
  return (
    <img
      className={`subway-tick ${className}`}
      alt="Subway tick"
      src={subwayTick}
    />
  );
};

SubwayTick.propTypes = {
  subwayTick: PropTypes.string,
};
