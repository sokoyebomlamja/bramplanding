import { ProfileOld } from ".";

export default {
  title: "Components/ProfileOld",
  component: ProfileOld,

  argTypes: {
    property1: {
      options: ["filled", "outline"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "filled",
    className: {},
    propertyOutline: "/img/property-1-outline.png",
  },
};
