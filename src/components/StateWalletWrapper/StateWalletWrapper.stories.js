import { StateWalletWrapper } from ".";

export default {
  title: "Components/StateWalletWrapper",
  component: StateWalletWrapper,

  argTypes: {
    state: {
      options: ["profile", "wallet", "giftcards", "wa"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "profile",
    className: {},
    frameClassName: {},
    homeHomeClassName: {},
    homeHome: "/img/home-6.png",
    divClassName: {},
    frameClassNameOverride: {},
    giftcardClassName: {},
    vectorClassName: {},
    vector: "/img/vector-28.png",
    divClassNameOverride: {},
    frameClassName1: {},
    FABPropertyRampClassName: {},
    FABVectorClassName: {},
    FABVector: "/img/vector-74-4.png",
    FABRectangleClassName: {},
    frameClassName2: {},
    walletStateOutline: "/img/wallet-8.png",
    walletStateFilledClassName: {},
    divClassName1: {},
    frameClassName3: {},
    userPropertyClassName: {},
    userPropertyUserlight: "/img/user-6.png",
    divClassName2: {},
    img: "/img/vector-27.png",
  },
};
