/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Swap } from "../Swap";
import "./style.css";

export const Fab = ({
  property1,
  className,
  rectangleClassName,
  vectorClassName,
  vector = "/img/vector-74-4.png",
}) => {
  return (
    <div className={`FAB property-1-${property1} ${className}`}>
      {property1 === "ramp" && (
        <>
          <div className={`rectangle-21 ${rectangleClassName}`} />

          <img
            className={`vector-25 ${vectorClassName}`}
            alt="Vector"
            src={vector}
          />
        </>
      )}

      {property1 === "swap" && (
        <Swap className="swap-instance" swap="/img/swap.png" />
      )}
    </div>
  );
};

Fab.propTypes = {
  property1: PropTypes.oneOf(["ramp", "swap"]),
  vector: PropTypes.string,
};
