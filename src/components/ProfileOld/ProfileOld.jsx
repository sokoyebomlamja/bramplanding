/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProfileOld = ({
  property1,
  className,
  propertyOutline = "/img/property-1-outline.png",
}) => {
  return (
    <img
      className={`profile-old ${className}`}
      alt="Property filled"
      src={
        property1 === "outline" ? propertyOutline : "/img/property-1-filled.png"
      }
    />
  );
};

ProfileOld.propTypes = {
  property1: PropTypes.oneOf(["filled", "outline"]),
  propertyOutline: PropTypes.string,
};
