import { Giftcard } from ".";

export default {
  title: "Components/Giftcard",
  component: Giftcard,

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
    stateOutline: "/img/state-outline-1.png",
  },
};
