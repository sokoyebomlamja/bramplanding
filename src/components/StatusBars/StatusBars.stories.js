import { StatusBars } from ".";

export default {
  title: "Components/StatusBars",
  component: StatusBars,

  argTypes: {
    device: {
      options: [
        "iphone-15-14-pro",
        "iphone-15",
        "iphone-15-14-pro-max",
        "iphone-15-plus",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    device: "iphone-15-14-pro",
    className: {},
    dynamicIslandSizeCompactTypeClassName: {},
    dynamicIslandTruedepthCameraClassName: {},
    dynamicIslandCameraClassName: {},
    dynamicIslandFacetimeCameraClassName: {},
  },
};
