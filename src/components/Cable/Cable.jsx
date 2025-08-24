/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cable = ({ className, cable = "/img/cable.png" }) => {
  return <img className={`cable ${className}`} alt="Cable" src={cable} />;
};

Cable.propTypes = {
  cable: PropTypes.string,
};
