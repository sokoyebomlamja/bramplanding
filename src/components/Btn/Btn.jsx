/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IOs } from "../IOs";
import "./style.css";

export const Btn = ({
  property1,
  className,
  buttonMainClassName,
  iOsIOs = "/img/ios.png",
  override = <IOs className="i-OS-instance" iOs={iOsIOs} />,
  divClassName,
  text = "Download on the",
  divClassNameOverride,
  text1 = "App Store",
  visible = true,
  hasDiv = true,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`btn ${state.property1} ${className}`}>
      <div
        className={`div ${buttonMainClassName}`}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
      >
        {visible && <>{override}</>}

        <div className="frame">
          {hasDiv && (
            <div className={`download-on-the ${divClassName}`}>{text}</div>
          )}

          <div className={`app-store ${divClassNameOverride}`}>{text1}</div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Btn.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  iOsIOs: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
  hasDiv: PropTypes.bool,
};
