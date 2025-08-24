/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Markets = ({
  property1,
  className,
  propertyCoins = "/img/property-1-coins-light.png",
}) => {
  return (
    <img
      className={`markets ${className}`}
      alt="Property coins"
      src={
        property1 === "coins-regular"
          ? "/img/property-1-coins-regular.png"
          : propertyCoins
      }
    />
  );
};

Markets.propTypes = {
  property1: PropTypes.oneOf(["coins-light", "coins-regular"]),
  propertyCoins: PropTypes.string,
};
