/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CaretDown } from "../CaretDown";
import "./style.css";

export const ButtonMain = ({
  leftIcon = true,
  rightIcon = true,
  buttonText = "Primary Button",
  showText = true,
  color,
  size,
  state,
  className,
  frameClassName,
}) => {
  return (
    <div
      className={`button-main ${color} state-${state} size-${size} ${className}`}
    >
      {leftIcon && (
        <CaretDown
          caretDown={
            (color === "primary" &&
              size === "default" &&
              state === "outline") ||
            (color === "primary" &&
              size === "default" &&
              state === "text-button") ||
            (color === "primary" && size === "small" && state === "outline") ||
            (color === "primary" && size === "small" && state === "text-button")
              ? "/img/caretdown-18.png"
              : (color === "secondary" &&
                    size === "default" &&
                    state === "outline") ||
                  (color === "secondary" &&
                    size === "default" &&
                    state === "text-button") ||
                  (color === "secondary" &&
                    size === "small" &&
                    state === "outline") ||
                  (color === "secondary" &&
                    size === "small" &&
                    state === "text-button")
                ? "/img/caretdown-20.png"
                : color === "secondary" &&
                    size === "large" &&
                    ["outline", "text-button"].includes(state)
                  ? "/img/caretdown-24.png"
                  : color === "primary" &&
                      size === "large" &&
                      ["outline", "text-button"].includes(state)
                    ? "/img/caretdown-28.png"
                    : size === "large" &&
                        ["default", "disabled", "hover"].includes(state)
                      ? "/img/caretdown-6.png"
                      : "/img/caretdown.png"
          }
          className={`${size === "large" ? "class" : "class-2"}`}
        />
      )}

      {["default", "disabled", "hover", "outline"].includes(state) && (
        <>
          <>
            {showText && (
              <div className={`primary-button ${frameClassName}`}>
                {buttonText}
              </div>
            )}
          </>
        </>
      )}

      {state === "text-button" && (
        <div className={`frame-10 ${frameClassName}`}>
          {showText && <div className="primary-button-2">{buttonText}</div>}
        </div>
      )}

      {rightIcon && (
        <CaretDown
          caretDown={
            size === "large" && ["default", "disabled", "hover"].includes(state)
              ? "/img/caretdown-6.png"
              : (color === "primary" &&
                    size === "default" &&
                    state === "outline") ||
                  (color === "primary" &&
                    size === "default" &&
                    state === "text-button") ||
                  (color === "primary" &&
                    size === "small" &&
                    state === "outline") ||
                  (color === "primary" &&
                    size === "small" &&
                    state === "text-button")
                ? "/img/caretdown-18.png"
                : (color === "secondary" &&
                      size === "default" &&
                      state === "outline") ||
                    (color === "secondary" &&
                      size === "default" &&
                      state === "text-button") ||
                    (color === "secondary" &&
                      size === "small" &&
                      state === "outline") ||
                    (color === "secondary" &&
                      size === "small" &&
                      state === "text-button")
                  ? "/img/caretdown-20.png"
                  : color === "secondary" &&
                      size === "large" &&
                      ["outline", "text-button"].includes(state)
                    ? "/img/caretdown-24.png"
                    : color === "primary" &&
                        size === "large" &&
                        ["outline", "text-button"].includes(state)
                      ? "/img/caretdown-28.png"
                      : "/img/caretdown.png"
          }
          className={`${size === "large" ? "class" : "class-2"}`}
        />
      )}
    </div>
  );
};

ButtonMain.propTypes = {
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  showText: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["default", "large", "small"]),
  state: PropTypes.oneOf([
    "default",
    "outline",
    "hover",
    "text-button",
    "disabled",
  ]),
};
