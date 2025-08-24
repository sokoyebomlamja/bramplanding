/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Airtime = ({ className, airtime = "/img/airtime.png" }) => {
  return <img className={`airtime ${className}`} alt="Airtime" src={airtime} />;
};

Airtime.propTypes = {
  airtime: PropTypes.string,
};
