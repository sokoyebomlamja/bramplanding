import { Wallet } from ".";

export default {
  title: "Components/Wallet",
  component: Wallet,

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
    stateOutline: "/img/state-outline-4.png",
    stateFilled: "/img/state-filled-4.png",
  },
};
