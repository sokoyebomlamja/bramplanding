/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CaretDown = ({
  className,
  caretDown = "/img/caretdown-54.png",
}) => {
  return (
    <img
      className={`caret-down ${className}`}
      alt="Caret down"
      src={caretDown}
    />
  );
};

CaretDown.propTypes = {
  caretDown: PropTypes.string,
};
