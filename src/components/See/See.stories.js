import { See } from ".";

export default {
  title: "Components/See",
  component: See,

  argTypes: {
    property1: {
      options: ["view", "hide"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "view",
    className: {},
    propertyView: "/img/property-1-view.png",
  },
};
