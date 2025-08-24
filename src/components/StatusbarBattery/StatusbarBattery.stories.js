import { StatusbarBattery } from ".";

export default {
  title: "Components/StatusbarBattery",
  component: StatusbarBattery,

  argTypes: {
    charge: {
      options: ["variable", "seventy", "one-hundred"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "70",
    darkMode: true,
    charge: "variable",
    charging: true,
    percentage: true,
    className: {},
    overlapGroupClassName: {},
    batteryEnd: "/img/battery-end-12.png",
    batteryEndClassName: {},
    exclude: "/img/exclude.png",
    outlineClassName: {},
    outline: "/img/outline.png",
    percentageClassName: {},
    img: "/img/battery-end.png",
  },
};
