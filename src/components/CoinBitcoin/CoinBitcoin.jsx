/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CoinBitcoin = ({
  className,
  coinMaskClassName,
  coinMask = "/img/coin-mask-6.png",
  iconMaskClassName,
  iconMask = "/img/icon-mask-6.png",
}) => {
  return (
    <div className={`coin-bitcoin ${className}`}>
      <div className="overlap-group-12">
        <div className="coin-mask-wrapper">
          <img
            className={`img-8 ${coinMaskClassName}`}
            alt="Coin mask"
            src={coinMask}
          />
        </div>

        <div className="icon-2">
          <img
            className={`img-8 ${iconMaskClassName}`}
            alt="Icon mask"
            src={iconMask}
          />
        </div>
      </div>
    </div>
  );
};

CoinBitcoin.propTypes = {
  coinMask: PropTypes.string,
  iconMask: PropTypes.string,
};
