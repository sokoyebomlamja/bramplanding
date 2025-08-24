import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import "./style.css";

export const DivWrapper = () => {
  return (
    <Link className="div-wrapper" to="/loading-screen-3">
      <div className="frame-189">
        <Logo
          className="logo-33"
          divClassName="logo-36"
          fluentEmojiHighClassName="logo-34"
          img="/img/vector-74-18.png"
          variant="white"
          vectorClassName="logo-35"
        />
        <div className="frame-190">
          <div className="rectangle-38" />

          <div className="rectangle-38" />

          <div className="rectangle-38" />

          <div className="rectangle-39" />
        </div>
      </div>
    </Link>
  );
};
