/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusbarBattery } from "../StatusbarBattery";
import { StatusbarsTime } from "../StatusbarsTime";
import "./style.css";

export const ThemeLightTrue = ({
  className,
  statusbarsTimeTimeClassName,
  statusbarBatteryBatteryEndClassName,
  statusbarBatteryOverlapGroupClassName,
  statusbarBatteryBatteryEnd = "/img/battery-end-12.png",
  statusbarBatteryExclude = "/img/exclude.png",
  wifiClassName,
  wifi = "/img/wifi-5.png",
  iconMobileSignalClassName,
  iconMobileSignal = "/img/icon-mobile-signal-5.png",
  leftSideClassName,
  statusbarsTimeDarkModeFalseTypeClassName,
  rightSideClassName,
  statusbarBatteryDarkModeFalseClassName,
}) => {
  return (
    <div className={`theme-light-true ${className}`}>
      <div className={`statusbars-time-wrapper ${leftSideClassName}`}>
        <StatusbarsTime
          className={statusbarsTimeDarkModeFalseTypeClassName}
          darkMode
          time="9:41"
          timeClassName={statusbarsTimeTimeClassName}
          type="default"
        />
      </div>

      <div className={`right-side-2 ${rightSideClassName}`}>
        <StatusbarBattery
          batteryEnd={statusbarBatteryBatteryEnd}
          batteryEndClassName={statusbarBatteryBatteryEndClassName}
          charge="variable"
          charging={false}
          className={statusbarBatteryDarkModeFalseClassName}
          darkMode
          exclude={statusbarBatteryExclude}
          overlapGroupClassName={statusbarBatteryOverlapGroupClassName}
          percentage
        />
        <img className={`wifi-2 ${wifiClassName}`} alt="Wifi" src={wifi} />

        <img
          className={`icon-mobile-signal-2 ${iconMobileSignalClassName}`}
          alt="Icon mobile signal"
          src={iconMobileSignal}
        />
      </div>
    </div>
  );
};

ThemeLightTrue.propTypes = {
  statusbarBatteryBatteryEnd: PropTypes.string,
  statusbarBatteryExclude: PropTypes.string,
  wifi: PropTypes.string,
  iconMobileSignal: PropTypes.string,
};
