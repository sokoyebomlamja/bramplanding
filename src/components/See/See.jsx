/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const See = ({
  property1,
  className,
  propertyView = "/img/property-1-view.png",
}) => {
  return (
    <img
      className={`see ${className}`}
      alt="Property hide"
      src={property1 === "view" ? propertyView : "/img/property-1-hide.png"}
    />
  );
};

See.propTypes = {
  property1: PropTypes.oneOf(["view", "hide"]),
  propertyView: PropTypes.string,
};
