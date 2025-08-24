import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,

  argTypes: {
    variant: {
      options: ["black", "white", "b-w", "brand"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showText: true,
    variant: "black",
    className: {},
    fluentEmojiHighClassName: {},
    vectorClassName: {},
    vector: "/img/vector-74.png",
    divClassName: {},
    img: "/img/vector-74-1.png",
  },
};
