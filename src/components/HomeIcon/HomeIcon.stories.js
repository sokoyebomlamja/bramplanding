import { HomeIcon } from ".";

export default {
  title: "Components/HomeIcon",
  component: HomeIcon,

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
    stateFilled: "/img/state-filled-3.png",
    stateOutline: "/img/state-outline-2.png",
  },
};
