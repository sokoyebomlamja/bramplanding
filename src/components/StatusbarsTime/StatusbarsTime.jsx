/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusbarsTime = ({
  time = "9:41",
  darkMode,
  type,
  className,
  timeClassName,
}) => {
  return (
    <div
      className={`statusbars-time type-${type} dark-mode-${darkMode} ${className}`}
    >
      {[
        "blue",
        "default",
        "green",
        "orange",
        "share-play",
        "voice-mail",
      ].includes(type) && (
        <div className={`time-3 ${timeClassName}`}>
          {["blue", "default", "green", "orange"].includes(type) && <>{time}</>}

          {["share-play", "voice-mail"].includes(type) && (
            <div className="overlap-group-47">
              {type === "share-play" && (
                <img
                  className="SF-symbol-shareplay"
                  alt="Sf symbol shareplay"
                  src="/img/sf-symbol-shareplay-1.png"
                />
              )}

              {type === "voice-mail" && <>􀕼</>}
            </div>
          )}
        </div>
      )}

      {type === "focus" && (
        <>
          <div className="time">{time}</div>

          <img
            className="SF-symbol-bed-double"
            alt="Sf symbol bed double"
            src={
              darkMode
                ? "/img/sf-symbol-bed-double-fill-1.png"
                : "/img/sf-symbol-bed-double-fill.png"
            }
          />
        </>
      )}
    </div>
  );
};

StatusbarsTime.propTypes = {
  time: PropTypes.string,
  darkMode: PropTypes.bool,
  type: PropTypes.oneOf([
    "default",
    "voice-mail",
    "focus",
    "blue",
    "orange",
    "green",
    "share-play",
  ]),
};
