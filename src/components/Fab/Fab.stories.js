import { Fab } from ".";

export default {
  title: "Components/Fab",
  component: Fab,

  argTypes: {
    property1: {
      options: ["ramp", "swap"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "ramp",
    className: {},
    rectangleClassName: {},
    vectorClassName: {},
    vector: "/img/vector-74-4.png",
  },
};
