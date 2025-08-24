/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusbarBattery } from "../StatusbarBattery";
import { StatusbarsTime } from "../StatusbarsTime";
import "./style.css";

export const ThemeLightFalse = ({
  className,
  leftSideClassName,
  statusbarsTimeDarkModeFalseTypeClassName,
  statusbarsTimeTimeClassName,
  rightSideClassName,
  iconMobileSignalClassName,
  iconMobileSignal = "/img/icon-mobile-signal.png",
  wifiClassName,
  wifi = "/img/wifi.png",
  statusbarBatteryBatteryEndClassName,
  statusbarBatteryBatteryEnd = "/img/battery-end.png",
  statusbarBatteryOutline = "/img/outline.png",
  statusbarBatteryOverlapGroupClassName,
  statusbarBatteryPercentageClassName,
  statusbarBatteryDarkModeFalseClassName,
  statusbarBatteryOutlineClassName,
}) => {
  return (
    <div className={`theme-light-false ${className}`}>
      <div className={`left-side ${leftSideClassName}`}>
        <StatusbarsTime
          className={statusbarsTimeDarkModeFalseTypeClassName}
          darkMode={false}
          time="9:41"
          timeClassName={statusbarsTimeTimeClassName}
          type="default"
        />
      </div>

      <div className={`right-side ${rightSideClassName}`}>
        <img
          className={`icon-mobile-signal ${iconMobileSignalClassName}`}
          alt="Icon mobile signal"
          src={iconMobileSignal}
        />

        <img className={`wifi ${wifiClassName}`} alt="Wifi" src={wifi} />

        <StatusbarBattery
          batteryEndClassName={statusbarBatteryBatteryEndClassName}
          charge="variable"
          charging={false}
          className={statusbarBatteryDarkModeFalseClassName}
          darkMode={false}
          img={statusbarBatteryBatteryEnd}
          outline={statusbarBatteryOutline}
          outlineClassName={statusbarBatteryOutlineClassName}
          overlapGroupClassName={statusbarBatteryOverlapGroupClassName}
          percentage
          percentageClassName={statusbarBatteryPercentageClassName}
          prop="70"
        />
      </div>
    </div>
  );
};

ThemeLightFalse.propTypes = {
  iconMobileSignal: PropTypes.string,
  wifi: PropTypes.string,
  statusbarBatteryBatteryEnd: PropTypes.string,
  statusbarBatteryOutline: PropTypes.string,
};
