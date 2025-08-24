import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import "./style.css";

export const LoadingScreen = () => {
  return (
    <Link className="loading-screen" to="/loading-screen-2">
      <div className="frame-183">
        <Logo
          className="logo-21"
          divClassName="logo-24"
          fluentEmojiHighClassName="logo-22"
          img="/img/vector-74-18.png"
          variant="white"
          vectorClassName="logo-23"
        />
        <div className="frame-184">
          <div className="rectangle-33" />

          <div className="rectangle-34" />

          <div className="rectangle-34" />

          <div className="rectangle-34" />
        </div>
      </div>
    </Link>
  );
};
