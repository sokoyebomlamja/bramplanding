/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const User = ({
  property1,
  className,
  propertyUserlight = "/img/property-1-userlight.png",
}) => {
  return (
    <img
      className={`user ${className}`}
      alt="Property"
      src={
        property1 === "user-light"
          ? propertyUserlight
          : "/img/property-1-userfilled.png"
      }
    />
  );
};

User.propTypes = {
  property1: PropTypes.oneOf(["user-filled", "user-light"]),
  propertyUserlight: PropTypes.string,
};
