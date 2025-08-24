/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Giftcard } from "../Giftcard";
import { HomeIcon } from "../HomeIcon";
import { ProfileOld } from "../ProfileOld";
import { Trade } from "../Trade";
import { Wallet } from "../Wallet";
import "./style.css";

export const BottomNavigation = ({
  destination,
  mode,
  className,
  frameClassName,
  homeIconStateFilledClassName,
  homeIconStateFilled = "/img/home-icon-1.png",
  divClassName,
  frameClassNameOverride,
  tradeStateOutline = "/img/trade-6.png",
  tradeStateFilledClassName,
  divClassNameOverride,
  frameClassName1,
  walletStateOutline = "/img/wallet-12.png",
  walletStateFilledClassName,
  divClassName1,
  frameClassName2,
  giftcardStateOutlineClassName,
  giftcardStateOutline = "/img/giftcard.png",
  divClassName2,
  frameClassName3,
  profileOldPropertyOutline = "/img/profile-old.png",
  profileOldPropertyFilledClassName,
  divClassName3,
}) => {
  return (
    <div
      className={`bottom-navigation ${mode} destination-${destination} ${className}`}
    >
      <div className={`frame-2 ${frameClassName}`}>
        <HomeIcon
          className={homeIconStateFilledClassName}
          state={destination === "wallet" ? "outline" : "filled"}
          stateFilled={homeIconStateFilled}
          stateOutline={
            mode === "light" && destination === "wallet"
              ? "/img/home-icon-3.png"
              : destination === "wallet" && mode === "dark"
                ? "/img/home-icon-4.png"
                : undefined
          }
        />
        <div className={`text-wrapper-2 ${divClassName}`}>Home</div>
      </div>

      <div className={`frame-2 ${frameClassNameOverride}`}>
        <Trade
          className={tradeStateFilledClassName}
          state="outline"
          stateOutline={tradeStateOutline}
        />
        <div className={`text-wrapper-3 ${divClassNameOverride}`}>Swap</div>
      </div>

      <div className={`frame-2 ${frameClassName1}`}>
        <Wallet
          className={walletStateFilledClassName}
          state={destination === "wallet" ? "filled" : "outline"}
          stateFilled={
            destination === "wallet" ? "/img/wallet-2.png" : undefined
          }
          stateOutline={walletStateOutline}
        />
        <div className={`text-wrapper-4 ${divClassName1}`}>Wallet</div>
      </div>

      <div className={`frame-2 ${frameClassName2}`}>
        <Giftcard
          className={giftcardStateOutlineClassName}
          state="outline"
          stateOutline={giftcardStateOutline}
        />
        <div className={`text-wrapper-5 ${divClassName2}`}>Giftcard</div>
      </div>

      <div className={`frame-2 ${frameClassName3}`}>
        <ProfileOld
          className={profileOldPropertyFilledClassName}
          property1="outline"
          propertyOutline={profileOldPropertyOutline}
        />
        <div className={`text-wrapper-6 ${divClassName3}`}>Profile</div>
      </div>
    </div>
  );
};

BottomNavigation.propTypes = {
  destination: PropTypes.oneOf(["home", "wallet"]),
  mode: PropTypes.oneOf(["dark", "light"]),
  homeIconStateFilled: PropTypes.string,
  tradeStateOutline: PropTypes.string,
  walletStateOutline: PropTypes.string,
  giftcardStateOutline: PropTypes.string,
  profileOldPropertyOutline: PropTypes.string,
};
