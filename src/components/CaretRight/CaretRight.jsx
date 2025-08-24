/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CaretRight = ({
  className,
  caretRight = "/img/caretright.png",
}) => {
  return (
    <img
      className={`caret-right ${className}`}
      alt="Caret right"
      src={caretRight}
    />
  );
};

CaretRight.propTypes = {
  caretRight: PropTypes.string,
};
