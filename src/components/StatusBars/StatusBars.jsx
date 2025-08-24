/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DynamicIsland } from "../DynamicIsland";
import { ThemeLightFalse } from "../ThemeLightFalse";
import "./style.css";

export const StatusBars = ({
  device,
  className,
  override = (
    <ThemeLightFalse
      className="statusbar-ios"
      iconMobileSignal="/img/icon-mobile-signal.png"
      statusbarBatteryBatteryEnd="/img/battery-end.png"
      statusbarBatteryDarkModeFalseClassName="theme-light-false-instance"
      statusbarBatteryOutline="/img/outline.png"
      statusbarsTimeDarkModeFalseTypeClassName="theme-light-false-type-default"
      wifi="/img/wifi.png"
    />
  ),
  dynamicIslandSizeCompactTypeClassName,
  dynamicIslandTruedepthCameraClassName,
  dynamicIslandCameraClassName,
  dynamicIslandFacetimeCameraClassName,
}) => {
  return (
    <div className={`status-bars device-${device} ${className}`}>
      {override}
      <DynamicIsland
        cameraClassName={dynamicIslandCameraClassName}
        className={dynamicIslandSizeCompactTypeClassName}
        facetimeCameraClassName={dynamicIslandFacetimeCameraClassName}
        size="compact"
        truedepthCameraClassName={dynamicIslandTruedepthCameraClassName}
        type="default"
      />
    </div>
  );
};

StatusBars.propTypes = {
  device: PropTypes.oneOf([
    "iphone-15-14-pro",
    "iphone-15",
    "iphone-15-14-pro-max",
    "iphone-15-plus",
  ]),
};
