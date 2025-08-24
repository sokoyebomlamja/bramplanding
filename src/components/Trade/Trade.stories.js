import { Trade } from ".";

export default {
  title: "Components/Trade",
  component: Trade,

  argTypes: {
    state: {
      options: ["filled", "outline"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "filled",
    className: {},
    stateOutline: "/img/state-outline.png",
  },
};
