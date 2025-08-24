/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IOs = ({ className, iOs = "/img/ios-2.png" }) => {
  return <img className={`i-OS ${className}`} alt="I OS" src={iOs} />;
};

IOs.propTypes = {
  iOs: PropTypes.string,
};
