/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Wallet = ({
  state,
  className,
  stateOutline = "/img/state-outline-4.png",
  stateFilled = "/img/state-filled-4.png",
}) => {
  return (
    <img
      className={`wallet ${className}`}
      alt="State filled"
      src={state === "outline" ? stateOutline : stateFilled}
    />
  );
};

Wallet.propTypes = {
  state: PropTypes.oneOf(["filled", "outline"]),
  stateOutline: PropTypes.string,
  stateFilled: PropTypes.string,
};
