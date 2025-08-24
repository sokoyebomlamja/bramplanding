/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Giftcard = ({
  state,
  className,
  stateOutline = "/img/state-outline-1.png",
}) => {
  return (
    <img
      className={`giftcard ${className}`}
      alt="State outline"
      src={state === "filled" ? "/img/state-filled-2.png" : stateOutline}
    />
  );
};

Giftcard.propTypes = {
  state: PropTypes.oneOf(["filled", "outline"]),
  stateOutline: PropTypes.string,
};
