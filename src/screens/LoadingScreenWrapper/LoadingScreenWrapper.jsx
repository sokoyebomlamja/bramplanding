import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import "./style.css";

export const LoadingScreenWrapper = () => {
  return (
    <Link className="loading-screen-wrapper" to="/">
      <div className="frame-187">
        <Logo
          className="logo-29"
          divClassName="logo-32"
          fluentEmojiHighClassName="logo-30"
          img="/img/vector-74-18.png"
          variant="white"
          vectorClassName="logo-31"
        />
        <div className="frame-188">
          <div className="rectangle-37" />

          <div className="rectangle-37" />

          <div className="rectangle-37" />

          <div className="rectangle-37" />
        </div>
      </div>
    </Link>
  );
};
