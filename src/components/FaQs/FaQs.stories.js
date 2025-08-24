import { FaQs } from ".";

export default {
  title: "Components/FaQs",
  component: FaQs,

  argTypes: {
    stateProp: {
      options: ["closed", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    FAQHeader: "What is OmniX",
    FAQBody:
      "OmniX is an advanced auto campaign setup and optimization software designed to streamline digital SEM campaigns. It integrates with major platforms like Google, Yahoo, Bing, and I-search, automating the setup and optimization process to enhance campaign performance and billing only for actual conversions.",
    stateProp: "closed",
    className: {},
    frameClassName: {},
  },
};
