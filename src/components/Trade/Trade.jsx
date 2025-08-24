/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Trade = ({
  state,
  className,
  stateOutline = "/img/state-outline.png",
}) => {
  return (
    <img
      className={`trade ${className}`}
      alt="State filled"
      src={state === "outline" ? stateOutline : "/img/state-filled.png"}
    />
  );
};

Trade.propTypes = {
  state: PropTypes.oneOf(["filled", "outline"]),
  stateOutline: PropTypes.string,
};
