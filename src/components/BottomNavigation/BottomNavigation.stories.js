import { BottomNavigation } from ".";

export default {
  title: "Components/BottomNavigation",
  component: BottomNavigation,

  argTypes: {
    destination: {
      options: ["home", "wallet"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    destination: "home",
    mode: "dark",
    className: {},
    frameClassName: {},
    homeIconStateFilledClassName: {},
    homeIconStateFilled: "/img/home-icon-1.png",
    divClassName: {},
    frameClassNameOverride: {},
    tradeStateOutline: "/img/trade-6.png",
    tradeStateFilledClassName: {},
    divClassNameOverride: {},
    frameClassName1: {},
    walletStateOutline: "/img/wallet-12.png",
    walletStateFilledClassName: {},
    divClassName1: {},
    frameClassName2: {},
    giftcardStateOutlineClassName: {},
    giftcardStateOutline: "/img/giftcard.png",
    divClassName2: {},
    frameClassName3: {},
    profileOldPropertyOutline: "/img/profile-old.png",
    profileOldPropertyFilledClassName: {},
    divClassName3: {},
  },
};
