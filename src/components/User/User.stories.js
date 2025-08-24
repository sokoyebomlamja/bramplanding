import { User } from ".";

export default {
  title: "Components/User",
  component: User,

  argTypes: {
    property1: {
      options: ["user-filled", "user-light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "user-filled",
    className: {},
    propertyUserlight: "/img/property-1-userlight.png",
  },
};
