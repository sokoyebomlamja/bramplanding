import { DynamicIsland } from ".";

export default {
  title: "Components/DynamicIsland",
  component: DynamicIsland,

  argTypes: {
    size: {
      options: ["mini", "expanded", "battery", "compact"],
      control: { type: "select" },
    },
    type: {
      options: [
        "mobile-call",
        "cam-active",
        "face-time",
        "battery",
        "maps",
        "default",
        "music-player",
        "wallet-card",
        "timer",
        "silent-alarm",
        "mini",
        "ringer",
        "face-ID",
        "air-drop",
        "focus-modes",
        "mic-cam-active",
        "alarm",
        "mic-active",
        "screen-recording",
        "weather",
        "lock",
        "airpods-pro",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    whoseAirpods: "David’s Airpod Pro",
    howMuchTimeIsLeft: "3:35",
    whatMusic: "Music",
    fromWho: "1 Photo",
    precentage: "75",
    showCharging: false,
    showPrecentage: true,
    howLongIsTheCall: "0:25",
    size: "mini",
    type: "mobile-call",
    className: {},
    truedepthCameraClassName: {},
    facetimeCameraClassName: {},
    cameraClassName: {},
  },
};
