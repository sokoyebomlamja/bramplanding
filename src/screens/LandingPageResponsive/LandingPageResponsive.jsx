import React, { useEffect, useState } from "react";
import { LandingPage } from "../LandingPage";
import { LandingPageMobile } from "../LandingPageMobile";

const MOBILE_BREAKPOINT_PX = 1024;

export const LandingPageResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : MOBILE_BREAKPOINT_PX,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < MOBILE_BREAKPOINT_PX) {
    return <LandingPageMobile />;
  }

  return <LandingPage />;
};


