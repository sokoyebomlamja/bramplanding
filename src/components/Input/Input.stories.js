import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,

  argTypes: {
    state: {
      options: ["error", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    helperIcon: true,
    rightIcon: true,
    rightSampleCopy: "Alexander",
    leftTextCopy: "Gadgets",
    leftText: true,
    leftSample: true,
    rightText: true,
    helperText: true,
    leftIcon: true,
    leftSampleCopy: "Gadgets",
    labelCopy: "Category Name",
    rightSample: true,
    required: true,
    label: true,
    rightTextCopy: "Alexander",
    helper: true,
    helperTextCopy: "Your first name",
    state: "error",
    className: {},
    inputFieldBoxClassName: {},
    frameClassName: {},
    divClassName: {},
    frameClassNameOverride: {},
  },
};
