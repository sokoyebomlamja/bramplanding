/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIndicator = ({
  theme,
  iPhone,
  className,
  homeIndicatorClassName,
}) => {
  return (
    <div className={`home-indicator ${iPhone} theme-${theme} ${className}`}>
      <div className={`div-2 ${homeIndicatorClassName}`} />
    </div>
  );
};

HomeIndicator.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
  iPhone: PropTypes.oneOf([
    "iphone-15-14-pro",
    "iphone-15",
    "iphone-15-14-pro-max",
    "iphone-15-14-plus-max",
  ]),
};
