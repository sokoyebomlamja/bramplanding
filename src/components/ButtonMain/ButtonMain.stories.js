import { ButtonMain } from ".";

export default {
  title: "Components/ButtonMain",
  component: ButtonMain,

  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "large", "small"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "outline", "hover", "text-button", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    leftIcon: true,
    rightIcon: true,
    buttonText: "Primary Button",
    showText: true,
    color: "primary",
    size: "default",
    state: "default",
    className: {},
    frameClassName: {},
  },
};
