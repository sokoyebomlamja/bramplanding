/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIcon = ({
  state,
  className,
  stateFilled = "/img/state-filled-3.png",
  stateOutline = "/img/state-outline-2.png",
}) => {
  return (
    <img
      className={`home-icon ${className}`}
      alt="State filled"
      src={state === "outline" ? stateOutline : stateFilled}
    />
  );
};

HomeIcon.propTypes = {
  state: PropTypes.oneOf(["filled", "outline"]),
  stateFilled: PropTypes.string,
  stateOutline: PropTypes.string,
};
