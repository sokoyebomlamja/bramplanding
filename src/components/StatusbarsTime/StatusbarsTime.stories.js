import { StatusbarsTime } from ".";

export default {
  title: "Components/StatusbarsTime",
  component: StatusbarsTime,

  argTypes: {
    type: {
      options: [
        "default",
        "voice-mail",
        "focus",
        "blue",
        "orange",
        "green",
        "share-play",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    time: "9:41",
    darkMode: true,
    type: "default",
    className: {},
    timeClassName: {},
  },
};
