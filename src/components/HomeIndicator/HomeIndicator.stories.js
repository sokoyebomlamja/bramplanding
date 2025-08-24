import { HomeIndicator } from ".";

export default {
  title: "Components/HomeIndicator",
  component: HomeIndicator,

  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    iPhone: {
      options: [
        "iphone-15-14-pro",
        "iphone-15",
        "iphone-15-14-pro-max",
        "iphone-15-14-plus-max",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "dark",
    iPhone: "iphone-15-14-pro",
    className: {},
    homeIndicatorClassName: {},
  },
};
