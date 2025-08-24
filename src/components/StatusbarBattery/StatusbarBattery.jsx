/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusbarBattery = ({
  prop = "70",
  darkMode,
  charge,
  charging,
  percentage,
  className,
  overlapGroupClassName,
  batteryEnd = "/img/battery-end-12.png",
  batteryEndClassName,
  exclude = "/img/exclude.png",
  outlineClassName,
  outline = "/img/outline.png",
  percentageClassName,
  img = "/img/battery-end.png",
}) => {
  return (
    <div className={`statusbar-battery ${className}`}>
      {((charge === "one-hundred" && darkMode) ||
        (charge === "seventy" && !charging && darkMode) ||
        (charging && darkMode) ||
        !darkMode) && (
        <div
          className={`overlap-group charging-${charging} ${charge} dark-mode-2-${darkMode} percentage-${percentage} ${overlapGroupClassName}`}
        >
          {!charging && !percentage && (
            <img
              className="fill"
              alt="Fill"
              src={
                !darkMode && charge === "one-hundred"
                  ? "/img/fill.png"
                  : !darkMode && charge === "seventy"
                    ? "/img/fill-1.png"
                    : darkMode && charge === "one-hundred"
                      ? "/img/fill-2.png"
                      : darkMode && charge === "seventy"
                        ? "/img/fill-3.png"
                        : undefined
              }
            />
          )}

          {((charging && charge === "seventy") ||
            (!charging && charge === "variable")) && (
            <img
              className={`outline ${outlineClassName}`}
              alt="Outline"
              src={
                charge === "variable"
                  ? outline
                  : darkMode
                    ? "/img/subtract-3.png"
                    : "/img/subtract-1.png"
              }
            />
          )}

          {charge === "variable" && !charging && (
            <div className={`percentage ${percentageClassName}`}>{prop}</div>
          )}

          {charging && charge === "seventy" && (
            <img
              className={`SF-sybol-bolt-fill ${percentageClassName}`}
              alt="Sf sybol bolt fill"
              src="/img/sf-sybol-bolt-fill.png"
            />
          )}

          {charging && percentage && (
            <div className="percentage-icon">
              <div className="percentage-2">{prop}</div>

              <img
                className="img"
                alt="Sf sybol bolt fill"
                src="/img/sf-sybol-bolt-fill-1.png"
              />
            </div>
          )}
        </div>
      )}

      <img
        className={`battery-end ${(charge === "one-hundred" && darkMode) || (charge === "seventy" && !charging && darkMode) || (charging && darkMode) || !darkMode ? batteryEndClassName : (!charging && darkMode && percentage) ? overlapGroupClassName : undefined}`}
        alt="Battery end"
        src={
          !darkMode && !percentage
            ? "/img/battery-end-5.png"
            : !darkMode && !charging && percentage
              ? img
              : !darkMode && charging && percentage
                ? "/img/battery-end-9.png"
                : !charging && darkMode && !percentage
                  ? "/img/battery-end-10.png"
                  : darkMode && charging && charge === "seventy"
                    ? "/img/battery-end-13.png"
                    : darkMode && charging && percentage
                      ? "/img/battery-end-14.png"
                      : !charging && darkMode && percentage
                        ? batteryEnd
                        : undefined
        }
      />

      {!charging && darkMode && percentage && (
        <img
          className={`exclude ${batteryEndClassName}`}
          alt="Exclude"
          src={exclude}
        />
      )}
    </div>
  );
};

StatusbarBattery.propTypes = {
  prop: PropTypes.string,
  darkMode: PropTypes.bool,
  charge: PropTypes.oneOf(["variable", "seventy", "one-hundred"]),
  charging: PropTypes.bool,
  percentage: PropTypes.bool,
  batteryEnd: PropTypes.string,
  exclude: PropTypes.string,
  outline: PropTypes.string,
  img: PropTypes.string,
};
