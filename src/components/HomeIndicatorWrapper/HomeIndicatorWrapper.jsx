/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HomeIndicator } from "../HomeIndicator";
import "./style.css";

export const HomeIndicatorWrapper = ({
  className,
  homeIndicatorThemeLightIphoneClassName,
  homeIndicatorHomeIndicatorClassName,
}) => {
  return (
    <div className={`home-indicator-wrapper ${className}`}>
      <HomeIndicator
        className={homeIndicatorThemeLightIphoneClassName}
        homeIndicatorClassName={homeIndicatorHomeIndicatorClassName}
        iPhone="iphone-15"
        theme="light"
      />
    </div>
  );
};
