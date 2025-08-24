import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { LandingPage } from "./screens/LandingPage";
import { LandingPageMobile } from "./screens/LandingPageMobile";
import { LoadingScreen } from "./screens/LoadingScreen";
import { UnifiedLoading } from "./screens/UnifiedLoading";
import { LandingPageResponsive } from "./screens/LandingPageResponsive";
import { LoadingScreenScreen } from "./screens/LoadingScreenScreen";
import { LoadingScreenWrapper } from "./screens/LoadingScreenWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <UnifiedLoading />,
  },
  {
    path: "/loading-screen-1",
    element: <LoadingScreen />,
  },
  {
    path: "/",
    element: <LandingPageResponsive />,
  },
  {
    path: "/loading-screen-2",
    element: <LoadingScreenScreen />,
  },
  {
    path: "/loading-screen-3",
    element: <LoadingScreenWrapper />,
  },
  {
    path: "/loading-screen-4",
    element: <DivWrapper />,
  },
  {
    path: "/landing-page-u40mobileu41",
    element: <LandingPageResponsive />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
