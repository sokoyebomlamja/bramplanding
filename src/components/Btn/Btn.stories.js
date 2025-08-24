import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,

  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    buttonMainClassName: {},
    iOsIOs: "/img/ios.png",
    divClassName: {},
    text: "Download on the",
    divClassNameOverride: {},
    text1: "App Store",
    visible: true,
    hasDiv: true,
  },
};
