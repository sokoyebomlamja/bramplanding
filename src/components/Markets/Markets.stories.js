import { Markets } from ".";

export default {
  title: "Components/Markets",
  component: Markets,

  argTypes: {
    property1: {
      options: ["coins-light", "coins-regular"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "coins-light",
    className: {},
    propertyCoins: "/img/property-1-coins-light.png",
  },
};
