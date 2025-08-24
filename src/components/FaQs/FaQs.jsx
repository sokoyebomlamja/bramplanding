/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconMenuWrapper } from "../IconMenuWrapper";
import "./style.css";

export const FaQs = ({
  FAQHeader = "What is OmniX",
  FAQBody = "OmniX is an advanced auto campaign setup and optimization software designed to streamline digital SEM campaigns. It integrates with major platforms like Google, Yahoo, Bing, and I-search, automating the setup and optimization process to enhance campaign performance and billing only for actual conversions.",
  stateProp,
  className,
  frameClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "closed",
  });

  return (
    <div
      className={`FA-qs ${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.state === "closed" && (
        <>
          <div className={`what-is-omnix ${frameClassName}`}>{FAQHeader}</div>

          <IconMenuWrapper
            className="icons-2"
            icon="add"
            iconAdd="/img/icons.png"
          />
        </>
      )}

      {state.state === "open" && (
        <>
          <div className={`frame-16 ${frameClassName}`}>
            <div className="what-is-omnix-2">{FAQHeader}</div>

            <img className="minus" alt="Minus" src="/img/minus.png" />
          </div>

          <div className="omnix-is-an-advanced-wrapper">
            <p className="omnix-is-an-advanced">{FAQBody}</p>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "closed") {
    switch (action) {
      case "click":
        return {
          state: "open",
        };
    }
  }

  if (state.state === "open") {
    switch (action) {
      case "click":
        return {
          state: "closed",
        };
    }
  }

  return state;
}

FaQs.propTypes = {
  FAQHeader: PropTypes.string,
  FAQBody: PropTypes.string,
  stateProp: PropTypes.oneOf(["closed", "open"]),
};
