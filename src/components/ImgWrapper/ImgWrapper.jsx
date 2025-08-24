/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ImgWrapper = ({ className, icons = "/img/icons-cancel.png" }) => {
  return <img className={`img-wrapper ${className}`} alt="Icons" src={icons} />;
};

ImgWrapper.propTypes = {
  icons: PropTypes.string,
};
