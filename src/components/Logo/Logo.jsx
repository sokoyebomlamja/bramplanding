/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  showText = true,
  variant,
  className,
  fluentEmojiHighClassName,
  vectorClassName,
  vector = "/img/vector-74.png",
  divClassName,
  img = "/img/vector-74-1.png",
}) => {
  return (
    <div className={`logo ${variant} ${className}`}>
      <div className={`fluent-emoji-high ${fluentEmojiHighClassName}`}>
        <img
          className={`vector ${vectorClassName}`}
          alt="Vector"
          src={
            variant === "white"
              ? img
              : variant === "b-w"
                ? "/img/vector-74-2.png"
                : vector
          }
        />
      </div>

      {showText && <div className={`text-wrapper ${divClassName}`}>bramp</div>}
    </div>
  );
};

Logo.propTypes = {
  showText: PropTypes.bool,
  variant: PropTypes.oneOf(["black", "white", "b-w", "brand"]),
  vector: PropTypes.string,
  img: PropTypes.string,
};
