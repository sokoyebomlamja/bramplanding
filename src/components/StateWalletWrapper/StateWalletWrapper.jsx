/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Fab } from "../Fab";
import { Home } from "../Home";
import { User } from "../User";
import { Wallet } from "../Wallet";
import "./style.css";

export const StateWalletWrapper = ({
  state,
  className,
  frameClassName,
  homeHomeClassName,
  homeHome = "/img/home-6.png",
  divClassName,
  frameClassNameOverride,
  giftcardClassName,
  vectorClassName,
  vector = "/img/vector-28.png",
  divClassNameOverride,
  frameClassName1,
  FABPropertyRampClassName,
  FABVectorClassName,
  FABVector = "/img/vector-74-4.png",
  FABRectangleClassName,
  frameClassName2,
  walletStateOutline = "/img/wallet-8.png",
  walletStateFilledClassName,
  divClassName1,
  frameClassName3,
  userPropertyClassName,
  userPropertyUserlight = "/img/user-6.png",
  divClassName2,
  img = "/img/vector-27.png",
}) => {
  return (
    <div className={`state-wallet-wrapper state-${state} ${className}`}>
      <div className={`frame-15 ${frameClassName}`}>
        <Home className={homeHomeClassName} home={homeHome} />
        <div className={`text-wrapper-44 ${divClassName}`}>Home</div>
      </div>

      <div className={`frame-15 ${frameClassNameOverride}`}>
        <div className={`giftcard-2 ${giftcardClassName}`}>
          <img
            className={`vector-26 ${vectorClassName}`}
            alt="Vector"
            src={state === "giftcards" ? vector : img}
          />
        </div>

        <div className={`text-wrapper-45 ${divClassNameOverride}`}>
          Giftcards
        </div>
      </div>

      <div className={`frame-15 ${frameClassName1}`}>
        <Fab
          className={FABPropertyRampClassName}
          property1="ramp"
          rectangleClassName={FABRectangleClassName}
          vector={FABVector}
          vectorClassName={FABVectorClassName}
        />
      </div>

      <div className={`frame-15 ${frameClassName2}`}>
        <Wallet
          className={walletStateFilledClassName}
          state="outline"
          stateOutline={walletStateOutline}
        />
        <div className={`text-wrapper-46 ${divClassName1}`}>Wallet</div>
      </div>

      <div className={`frame-15 ${frameClassName3}`}>
        <User
          className={userPropertyClassName}
          property1="user-light"
          propertyUserlight={userPropertyUserlight}
        />
        <div className={`text-wrapper-47 ${divClassName2}`}>Profile</div>
      </div>
    </div>
  );
};

StateWalletWrapper.propTypes = {
  state: PropTypes.oneOf(["profile", "wallet", "giftcards", "wa"]),
  homeHome: PropTypes.string,
  vector: PropTypes.string,
  FABVector: PropTypes.string,
  walletStateOutline: PropTypes.string,
  userPropertyUserlight: PropTypes.string,
  img: PropTypes.string,
};
