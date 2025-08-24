import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import "./style.css";

export const LoadingScreenScreen = () => {
  return (
    <Link className="loading-screen-screen" to="/loading-screen-4">
      <div className="frame-185">
        <Logo
          className="logo-25"
          divClassName="logo-28"
          fluentEmojiHighClassName="logo-26"
          img="/img/vector-74-18.png"
          variant="white"
          vectorClassName="logo-27"
        />
        <div className="frame-186">
          <div className="rectangle-35" />

          <div className="rectangle-35" />

          <div className="rectangle-36" />

          <div className="rectangle-36" />
        </div>
      </div>
    </Link>
  );
};
