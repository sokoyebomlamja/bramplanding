/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Swap = ({ className, swap = "/img/swap-1.png" }) => {
  return <img className={`swap ${className}`} alt="Swap" src={swap} />;
};

Swap.propTypes = {
  swap: PropTypes.string,
};
