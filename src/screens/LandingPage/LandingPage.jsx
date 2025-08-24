import React from "react";
import { Airtime } from "../../components/Airtime";
import { Betting } from "../../components/Betting";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Btn } from "../../components/Btn";
import { ButtonMain } from "../../components/ButtonMain";
import { Cable } from "../../components/Cable";
import { CaretDown } from "../../components/CaretDown";
import { CaretRight } from "../../components/CaretRight";
import { CaretRightRegular } from "../../components/CaretRightRegular";
import { CoinBitcoin } from "../../components/CoinBitcoin";
import { CoinCardano } from "../../components/CoinCardano";
import { CoinEthereum } from "../../components/CoinEthereum";
import { CoinStellar } from "../../components/CoinStellar";
import { CurrencyNgn } from "../../components/CurrencyNgn";
import { Data } from "../../components/Data";
import { Deposit } from "../../components/Deposit";
import { DynamicIsland } from "../../components/DynamicIsland";
import { Electricity } from "../../components/Electricity";
import { EscrowIcons } from "../../components/EscrowIcons";
import { FaQs } from "../../components/FaQs";
import { History } from "../../components/History";
import { HomeIndicatorWrapper } from "../../components/HomeIndicatorWrapper";
import { IconMenuWrapper } from "../../components/IconMenuWrapper";
import { IconPrintWrapper } from "../../components/IconPrintWrapper";
import { Icons } from "../../components/Icons";
import { IconsChevronDown } from "../../components/IconsChevronDown";
import { IconsWrapper } from "../../components/IconsWrapper";
import { ImgWrapper } from "../../components/ImgWrapper";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Markets } from "../../components/Markets";
import { PlayStore } from "../../components/PlayStore";
import { Search } from "../../components/Search";
import { See } from "../../components/See";
import { StateWalletWrapper } from "../../components/StateWalletWrapper";
import { StatusBars } from "../../components/StatusBars";
import { StatusbarsTime } from "../../components/StatusbarsTime";
import { SubwayTick } from "../../components/SubwayTick";
import { ThemeLightFalse } from "../../components/ThemeLightFalse";
import { ThemeLightTrue } from "../../components/ThemeLightTrue";
import { Utilities } from "../../components/Utilities";
import { Wallet } from "../../components/Wallet";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top">
        <img className="group-8" alt="Group" src="/img/group-1.png" />

        <header className="header">
          <Logo
            className="logo-instance"
            divClassName="logo-3"
            fluentEmojiHighClassName="design-component-instance-node"
            variant="brand"
            vector="/img/vector-74-9.png"
            vectorClassName="logo-2"
          />
          <div className="navigation">
            <div className="frame-17">
              <div className="text-wrapper-48">Product</div>

              <IconsChevronDown
                className="design-component-instance-node-2"
                iconsChevronDown="/img/icons-chevron-down-2.png"
              />
            </div>

            <div className="frame-18">
              <div className="text-wrapper-48">Resources</div>

              <IconsChevronDown
                className="design-component-instance-node-2"
                iconsChevronDown="/img/icons-chevron-down-2.png"
              />
            </div>

            <div className="frame-19">
              <div className="text-wrapper-48">Contact</div>
            </div>
          </div>
        </header>

        <div className="hero-section">
          <div className="left-side-2">
            <div className="headline-subheadline">
              <p className="p">Take control of your digital assets</p>

              <p className="text-wrapper-49">
                Buy and Sell Crypto with Bramp AI Agent on Whatsapp
                <p> & Mobile App. </p>
              </p>

              <div className="frame-20">
                <div className="mdi-stars">
                  <img
                    className="vector-34"
                    alt="Vector"
                    src="/img/vector-33.png"
                  />
                </div>

                <p className="text-wrapper-50">No Hassle, No Hidden Fees</p>
              </div>
            </div>

            <div className="frame-21">
              <Btn
                buttonMainClassName="btn-2"
                className="design-component-instance-node-3"
                iOsIOs="/img/ios-3-2x.png"
                property1="default"
              />
              <Btn
                buttonMainClassName="btn-3"
                className="btn-2-instance"
                divClassName="btn-instance"
                divClassNameOverride="btn-instance"
                override={
                  <PlayStore
                    className="play-store-instance"
                    playStore="/img/play-store-1-2x.png"
                  />
                }
                property1="default"
                text="Get it on"
                text1="Google Play"
              />
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              alt="Hero section hand"
              src="/img/Herosechand.svg"
            />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="text-wrapper-51">Secure and Seamless Transactions</div>

        <div className="frame-22">
          <div className="frame-23">
            <div className="group-wrapper">
              <div className="overlap-wrapper">
                <div className="overlap-5">
                  <img
                    className="rectangle-22"
                    alt="Rectangle"
                    src="/img/rectangle.png"
                  />

                  <div className="deposit-2">
                    <div className="overlap-6">
                      <div className="frame-24">
                        <div className="frame-25">
                          <div className="frame-26">
                            <img
                              className="avatar-image"
                              alt="Avatar image"
                              src="/img/vector-8.png"
                            />

                            <div className="frame-27">
                              <p className="hello-adebayo">
                                <span className="span">Hello,</span>

                                <span className="text-wrapper-52">&nbsp;</span>

                                <span className="text-wrapper-53">Adebayo</span>
                              </p>

                              <div className="text-wrapper-54">@adeby78</div>
                            </div>
                          </div>

                          <Icons
                            className="icons-3"
                            icons="/img/vector-8.png"
                          />
                        </div>

                        <div className="frame-28">
                          <div className="rectangle-23" />

                          <div className="frame-29">
                            <div className="frame-26">
                              <div className="text-wrapper-55">
                                Total Portfolio Balance
                              </div>

                              <See
                                className="see-instance"
                                property1="view"
                                propertyView="/img/vector-8.png"
                              />
                            </div>

                            <div className="frame-30">
                              <img
                                className="vector-35"
                                alt="Vector"
                                src="/img/vector-8.png"
                              />

                              <div className="text-wrapper-56">0.00</div>
                            </div>
                          </div>

                          <img
                            className="cryptowallets"
                            alt="Cryptowallets"
                            src="/img/vector-8.png"
                          />
                        </div>

                        <div className="frame-31">
                          <div className="frame-25">
                            <div className="text-wrapper-57">Quick Links</div>

                            <div className="frame-30">
                              <div className="text-wrapper-58">View more</div>

                              <CaretRightRegular
                                caretRightRegular="/img/vector-8.png"
                                className="caret-right-regular-instance"
                              />
                            </div>
                          </div>

                          <div className="frame-32">
                            <div className="frame-33">
                              <div className="deposit-wrapper">
                                <Deposit
                                  className="design-component-instance-node-4"
                                  deposit="/img/deposit-1.png"
                                />
                              </div>

                              <div className="text-wrapper-59">Deposit</div>
                            </div>

                            <div className="frame-33">
                              <div className="guidance-send-wrapper">
                                <div className="guidance-send" />
                              </div>

                              <div className="text-wrapper-59">Transfer</div>
                            </div>

                            <div className="frame-33">
                              <div className="frame-34">
                                <Markets
                                  className="design-component-instance-node-4"
                                  property1="coins-light"
                                  propertyCoins="/img/markets.png"
                                />
                              </div>

                              <div className="text-wrapper-59">Swap</div>
                            </div>

                            <div className="frame-33">
                              <div className="frame-34">
                                <Utilities
                                  className="utilities-instance"
                                  utilities="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-59">Utilities</div>
                            </div>
                          </div>
                        </div>

                        <div className="frame-35">
                          <div className="frame-wrapper">
                            <div className="frame-36">
                              <div className="customer-information">
                                <div className="text-wrapper-60">
                                  All Assets
                                </div>
                              </div>

                              <div className="overview">
                                <div className="text-wrapper-61">Crypto</div>
                              </div>

                              <div className="overview">
                                <div className="text-wrapper-61">Fiat</div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-37">
                            <div className="frame-32">
                              <div className="frame-26">
                                <div className="icon-ethereum">
                                  <div className="group-9">
                                    <img
                                      className="vector-36"
                                      alt="Vector"
                                      src="/img/vector-37-2x.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-38">
                                  <div className="text-wrapper-62">Bitcoin</div>

                                  <div className="text-wrapper-63">BTC</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <IconsWrapper
                                    className="icons-4"
                                    icons="/img/icons-17.png"
                                  />
                                  <div className="text-wrapper-64">
                                    103,058.64
                                  </div>
                                </div>

                                <div className="frame-30">
                                  <IconPrintWrapper
                                    className="icons-5"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-65">4.65%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-32">
                              <div className="frame-26">
                                <img
                                  className="icon-ethereum"
                                  alt="Icon ethereum"
                                  src="/img/icon-ethereum-cryptocurrency-4.png"
                                />

                                <div className="frame-38">
                                  <div className="text-wrapper-62">
                                    Ethereum
                                  </div>

                                  <div className="text-wrapper-63">ETH</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <IconsWrapper
                                    className="icons-6"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-64">2,562</div>
                                </div>

                                <div className="frame-30">
                                  <IconPrintWrapper
                                    className="icons-7"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-65">0.5%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-32">
                              <div className="frame-26">
                                <img
                                  className="icon-ethereum"
                                  alt="Icon ethereum"
                                  src="/img/icon-ethereum-cryptocurrency-2x.png"
                                />

                                <div className="frame-38">
                                  <div className="text-wrapper-62">Naira</div>

                                  <div className="text-wrapper-63">NGNB</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <CurrencyNgn
                                    className="currency-ngn-instance"
                                    currencyNgn="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-64">1,600</div>
                                </div>

                                <div className="frame-30">
                                  <div className="text-wrapper-66">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-32">
                              <div className="frame-26">
                                <div className="frame-41">
                                  <img
                                    className="vector-37"
                                    alt="Vector"
                                    src="/img/vector-39.png"
                                  />
                                </div>

                                <div className="frame-38">
                                  <div className="text-wrapper-62">Solana</div>

                                  <div className="text-wrapper-63">SOL</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <IconsWrapper
                                    className="icons-8"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-64">167.40</div>
                                </div>

                                <div className="frame-30">
                                  <IconPrintWrapper
                                    className="icons-9"
                                    icon="decrease"
                                    iconDecrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-67">0.94%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-32">
                              <div className="frame-26">
                                <div className="usdt">
                                  <div className="group-10">
                                    <div className="overlap-group-16">
                                      <img
                                        className="vector-38"
                                        alt="Vector"
                                        src="/img/vector-40.png"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-38">
                                  <div className="text-wrapper-62">
                                    USD Tether
                                  </div>

                                  <div className="text-wrapper-63">USDT</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <IconsWrapper
                                    className="icons-10"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-64">1</div>
                                </div>

                                <div className="frame-30">
                                  <div className="text-wrapper-66">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-32">
                              <div className="frame-26">
                                <div className="frame-42">
                                  <div className="overlap-group-17">
                                    <img
                                      className="vector-39"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />

                                    <img
                                      className="vector-40"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-38">
                                  <div className="text-wrapper-62">
                                    USD Coin
                                  </div>

                                  <div className="text-wrapper-63">USDC</div>
                                </div>
                              </div>

                              <div className="frame-39">
                                <div className="frame-40">
                                  <IconsWrapper
                                    className="icons-11"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-64">1</div>
                                </div>

                                <div className="frame-30">
                                  <div className="text-wrapper-66">0%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="frame-43">
                        <BottomNavigation
                          className="bottom-navigation-instance"
                          destination="home"
                          divClassName="bottom-navigation-4"
                          divClassName1="bottom-navigation-6"
                          divClassName2="bottom-navigation-6"
                          divClassName3="bottom-navigation-6"
                          divClassNameOverride="bottom-navigation-6"
                          frameClassName="bottom-navigation-2"
                          frameClassName1="bottom-navigation-2"
                          frameClassName2="bottom-navigation-2"
                          frameClassName3="bottom-navigation-2"
                          frameClassNameOverride="bottom-navigation-2"
                          giftcardStateOutline="/img/vector-8.png"
                          giftcardStateOutlineClassName="bottom-navigation-8"
                          homeIconStateFilled="/img/vector-8.png"
                          homeIconStateFilledClassName="bottom-navigation-3"
                          mode="light"
                          profileOldPropertyFilledClassName="bottom-navigation-9"
                          profileOldPropertyOutline="/img/vector-8.png"
                          tradeStateFilledClassName="bottom-navigation-5"
                          tradeStateOutline="/img/vector-8.png"
                          walletStateFilledClassName="bottom-navigation-7"
                          walletStateOutline="/img/vector-8.png"
                        />
                        <HomeIndicatorWrapper
                          className="home-indicator-instance"
                          homeIndicatorHomeIndicatorClassName="home-indicator-3"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-2"
                        />
                      </div>

                      <div className="status-bars-2">
                        <div className="statusbar-ios-2">
                          <div className="statusbars-time-instance-wrapper">
                            <StatusbarsTime
                              className="statusbars-time-instance"
                              darkMode={false}
                              time="9:41"
                              timeClassName="statusbars-time-2"
                              type="default"
                            />
                          </div>

                          <div className="right-side-3">
                            <img
                              className="icon-mobile-signal-3"
                              alt="Icon mobile signal"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="wifi-3"
                              alt="Wifi"
                              src="/img/vector-8.png"
                            />

                            <div className="statusbar-battery-2">
                              <img
                                className="outline-2"
                                alt="Outline"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="battery-end-2"
                                alt="Battery end"
                                src="/img/vector-8.png"
                              />

                              <div className="percentage-3">70</div>
                            </div>
                          </div>
                        </div>

                        <DynamicIsland
                          cameraClassName="dynamic-island-4"
                          className="dynamic-island-instance"
                          facetimeCameraClassName="dynamic-island-3"
                          size="compact"
                          truedepthCameraClassName="dynamic-island-2"
                          type="default"
                        />
                      </div>

                      <div className="rectangle-24" />

                      <div className="bottom-sheet">
                        <div className="frame-44">
                          <div className="frame-25">
                            <div className="text-wrapper-68">Select Token</div>

                            <div className="icons-instance-wrapper">
                              <ImgWrapper
                                className="icons-12"
                                icons="/img/vector-8.png"
                              />
                            </div>
                          </div>

                          <div className="frame-45">
                            <div className="frame-46">
                              <div className="text-wrapper-69">Crypto</div>
                            </div>

                            <div className="frame-47">
                              <div className="text-wrapper-70">Fiat</div>
                            </div>
                          </div>

                          <div className="input-field-box-2">
                            <div className="frame-48">
                              <Search
                                className="search-instance"
                                search="/img/search-1.png"
                              />
                              <div className="text-wrapper-57">
                                Search by asset name
                              </div>
                            </div>

                            <div className="frame-49" />
                          </div>

                          <div className="frame-37">
                            <div className="frame-26">
                              <div className="icon-ethereum">
                                <div className="group-11">
                                  <img
                                    className="vector-36"
                                    alt="Vector"
                                    src="/img/vector-45-2x.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-38">
                                <div className="text-wrapper-62">BTC</div>

                                <div className="text-wrapper-63">Bitcoin</div>
                              </div>
                            </div>

                            <div className="frame-26">
                              <img
                                className="icon-ethereum"
                                alt="Icon ethereum"
                                src="/img/icon-ethereum-cryptocurrency-5.png"
                              />

                              <div className="frame-38">
                                <div className="text-wrapper-62">ETH</div>

                                <div className="text-wrapper-63">Ethereum</div>
                              </div>
                            </div>

                            <div className="frame-26">
                              <div className="frame-50">
                                <img
                                  className="vector-37"
                                  alt="Vector"
                                  src="/img/vector-48-2x.png"
                                />
                              </div>

                              <div className="frame-38">
                                <div className="text-wrapper-62">SOL</div>

                                <div className="text-wrapper-63">Solana</div>
                              </div>
                            </div>

                            <div className="frame-26">
                              <div className="usdt">
                                <div className="group-12">
                                  <img
                                    className="vector-41"
                                    alt="Vector"
                                    src="/img/vector-49-2x.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-38">
                                <div className="text-wrapper-62">USDT</div>

                                <div className="text-wrapper-63">
                                  USD Tether
                                </div>
                              </div>
                            </div>

                            <div className="frame-26">
                              <div className="frame-42">
                                <img
                                  className="vector-42"
                                  alt="Vector"
                                  src="/img/vector-50-2x.png"
                                />

                                <div className="overlap-group-18">
                                  <img
                                    className="vector-43"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />

                                  <img
                                    className="vector-44"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-38">
                                <div className="text-wrapper-62">USDC</div>

                                <div className="text-wrapper-63">USD Coin</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-51">
              <p className="text-wrapper-71">
                Easily Buy Crypto with Local Fiat.
              </p>

              <p className="text-wrapper-72">
                Purchase USDT and other cryptocurrencies quickly and securely
                using your preferred local payment methods like bank transfers
                and mobile money.
              </p>
            </div>
          </div>

          <div className="frame-52">
            <div className="frame-53">
              <div className="frame-54">
                <div className="frame-55">
                  <div className="group-13">
                    <div className="overlap-7">
                      <img
                        className="rectangle-25"
                        alt="Rectangle"
                        src="/img/rectangle-1.png"
                      />

                      <div className="giftcards">
                        <div className="overlap-group-19">
                          <div className="frame-56">
                            <div className="frame-57">
                              <div className="caret-left-wrapper">
                                <div className="caret-left">
                                  <img
                                    className="vector-45"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-58" />
                            </div>

                            <div className="frame-59">
                              <div className="frame-60">
                                <div className="frame-61">
                                  <Logo
                                    className="logo-4"
                                    divClassName="logo-7"
                                    fluentEmojiHighClassName="logo-5"
                                    variant="brand"
                                    vector="/img/vector-8.png"
                                    vectorClassName="logo-6"
                                  />
                                  <p className="text-wrapper-73">
                                    Swap assets easily with bramp.
                                  </p>
                                </div>

                                <div className="frame-61">
                                  <div className="input-field-box-3">
                                    <div className="text-wrapper-74">Sell</div>

                                    <div className="frame-32">
                                      <div className="frame-62">
                                        <div className="input-field-box-4">
                                          <div className="frame-63">
                                            <div className="div-3">
                                              <div className="group-14">
                                                <img
                                                  className="vector-46"
                                                  alt="Vector"
                                                  src="/img/vector-55.png"
                                                />
                                              </div>
                                            </div>

                                            <div className="text-wrapper-75">
                                              BTC
                                            </div>

                                            <CaretDown
                                              caretDown="/img/caretdown-61-2x.png"
                                              className="design-component-instance-node-5"
                                            />
                                          </div>
                                        </div>

                                        <div className="frame-64">
                                          <Wallet
                                            className="design-component-instance-node-5"
                                            state="outline"
                                            stateOutline="/img/wallet-15-2x.png"
                                          />
                                          <div className="frame-65">
                                            <div className="text-wrapper-76">
                                              0.00045 BTC
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="frame-66">
                                        <div className="text-wrapper-77">
                                          0.00
                                        </div>

                                        <div className="text-wrapper-78">
                                          0.00 BTC
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="input-field-box-3">
                                    <div className="text-wrapper-74">Buy</div>

                                    <div className="frame-32">
                                      <div className="frame-62">
                                        <div className="input-field-box-4">
                                          <div className="frame-63">
                                            <img
                                              className="div-3"
                                              alt="Icon ethereum"
                                              src="/img/icon-ethereum-cryptocurrency-1-2x.png"
                                            />

                                            <div className="text-wrapper-75">
                                              NGNB
                                            </div>

                                            <CaretDown
                                              caretDown="/img/caretdown-62-2x.png"
                                              className="design-component-instance-node-5"
                                            />
                                          </div>
                                        </div>

                                        <div className="frame-64">
                                          <Wallet
                                            className="design-component-instance-node-5"
                                            state="outline"
                                            stateOutline="/img/wallet-16.png"
                                          />
                                          <div className="frame-65">
                                            <div className="text-wrapper-76">
                                              845,333 NGNB
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="frame-66">
                                        <div className="text-wrapper-77">
                                          0.00
                                        </div>

                                        <div className="frame-67">
                                          <div className="hugeicons-dollar">
                                            <img
                                              className="vector-47"
                                              alt="Vector"
                                              src="/img/vector-56.png"
                                            />
                                          </div>

                                          <div className="text-wrapper-76">
                                            0
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="FAB-2">
                                    <div className="div-3">
                                      <img
                                        className="vector-48"
                                        alt="Vector"
                                        src="/img/vector-57-2x.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <ButtonMain
                                buttonText="Swap"
                                className="button-main-instance"
                                color="primary"
                                frameClassName="button-main-2"
                                leftIcon={false}
                                rightIcon={false}
                                size="large"
                                state="disabled"
                              />
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <img
                                  className="american-express"
                                  alt="American express"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-79">
                                  American Express
                                </div>
                              </div>

                              <div className="frame-69">
                                <div className="img-wrapper-2">
                                  <img
                                    className="apple-logo"
                                    alt="Apple logo"
                                    src="/img/apple-logo-transparent-free-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">
                                  Apple Store
                                </div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <img
                                  className="best-buy"
                                  alt="Best buy"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-80">Best Buy</div>
                              </div>

                              <div className="frame-69">
                                <img
                                  className="ebay"
                                  alt="Ebay"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-80">Ebay</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <img
                                  className="footlocker"
                                  alt="Footlocker"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-80">
                                  Foot Locker
                                </div>
                              </div>

                              <div className="frame-69">
                                <div className="img-wrapper-2">
                                  <img
                                    className="gamestop"
                                    alt="Gamestop"
                                    src="/img/vector-8.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">GameStop</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <img
                                  className="googleplay"
                                  alt="Googleplay"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-80">Google</div>
                              </div>

                              <div className="frame-69">
                                <img
                                  className="homedepot"
                                  alt="Homedepot"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-80">
                                  Home Depot
                                </div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-2">
                                  <img
                                    className="itunes"
                                    alt="Itunes"
                                    src="/img/itunes.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">iTunes</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-2">
                                  <img
                                    className="macys-logo-black"
                                    alt="Macys logo black"
                                    src="/img/macys-logo-black-transparent.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Macy’s</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="netflix"
                                    alt="Netflix"
                                    src="/img/netflix.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Netflix</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="nike"
                                    alt="Nike"
                                    src="/img/nike.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Nike</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="nordstrom-seeklogo"
                                    alt="Nordstrom seeklogo"
                                    src="/img/nordstrom-seeklogo.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Nordstorm</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="offgamers"
                                    alt="Offgamers"
                                    src="/img/offgamers.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">OffGamers</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="vanilla"
                                    alt="Vanilla"
                                    src="/img/vanilla.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">
                                  OneVanilla
                                </div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="playstation-logo"
                                    alt="Playstation logo"
                                    src="/img/playstation-logo-wine.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">
                                  PlayStation
                                </div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="razer-logo"
                                    alt="Razer logo"
                                    src="/img/razer-logo-transparent-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Razer</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="sephora-logo-png"
                                    alt="Sephora logo png"
                                    src="/img/sephora-logo-png-seeklogo-208666.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Sephora</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="steam"
                                    alt="Steam"
                                    src="/img/steam.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Steam</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="target"
                                    alt="Target"
                                    src="/img/target.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Target</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="element-visa"
                                    alt="Element visa"
                                    src="/img/857-visa.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Visa</div>
                              </div>

                              <div className="frame-69">
                                <div className="giftcards-3">
                                  <img
                                    className="walmart-logo"
                                    alt="Walmart logo"
                                    src="/img/walmart-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Walmart</div>
                              </div>
                            </div>

                            <div className="frame-68">
                              <div className="frame-70">
                                <div className="giftcards-3">
                                  <img
                                    className="xbox-logo"
                                    alt="Xbox logo"
                                    src="/img/xbox-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-80">Xbox</div>
                              </div>
                            </div>
                          </div>

                          <div className="home-indicator-instance-wrapper">
                            <HomeIndicatorWrapper
                              className="home-indicator-4"
                              homeIndicatorHomeIndicatorClassName="home-indicator-6"
                              homeIndicatorThemeLightIphoneClassName="home-indicator-5"
                            />
                          </div>
                        </div>

                        <div className="status-bars-3">
                          <div className="statusbar-ios-3">
                            <div className="left-side-3">
                              <StatusbarsTime
                                className="statusbars-time-3"
                                darkMode={false}
                                time="9:41"
                                timeClassName="statusbars-time-4"
                                type="default"
                              />
                            </div>

                            <div className="right-side-4">
                              <img
                                className="icon-mobile-signal-4"
                                alt="Icon mobile signal"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="wifi-4"
                                alt="Wifi"
                                src="/img/vector-8.png"
                              />

                              <div className="statusbar-battery-3">
                                <img
                                  className="outline-3"
                                  alt="Outline"
                                  src="/img/vector-8.png"
                                />

                                <img
                                  className="battery-end-3"
                                  alt="Battery end"
                                  src="/img/vector-8.png"
                                />

                                <div className="percentage-4">70</div>
                              </div>
                            </div>
                          </div>

                          <DynamicIsland
                            cameraClassName="dynamic-island-8"
                            className="dynamic-island-5"
                            facetimeCameraClassName="dynamic-island-7"
                            size="compact"
                            truedepthCameraClassName="dynamic-island-6"
                            type="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-51">
                  <p className="text-wrapper-71">
                    Convert Crypto to Fiat with Ease.
                  </p>

                  <p className="text-wrapper-72">
                    Sell your crypto and receive fiat directly into your bank
                    account or mobile wallet with transparent pricing.
                  </p>
                </div>
              </div>

              <div className="frame-54">
                <div className="frame-71">
                  <div className="group-15">
                    <div className="overlap-8">
                      <img
                        className="rectangle-26"
                        alt="Rectangle"
                        src="/img/rectangle-2.png"
                      />

                      <div className="giftcards-4">
                        <div className="overlap-group-20">
                          <div className="frame-72">
                            <div className="frame-73">
                              <div className="frame-25">
                                <div className="text-wrapper-81">Giftcards</div>

                                <div className="frame-74">
                                  <History
                                    className="history-instance"
                                    history="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-82">History</div>
                                </div>
                              </div>

                              <div className="frame-75">
                                <div className="frame-76" />

                                <div className="frame-77" />

                                <div className="frame-77" />

                                <div className="frame-77" />

                                <div className="frame-77" />
                              </div>

                              <p className="text-wrapper-83">
                                Select a card to trade
                              </p>

                              <Input
                                className="input-instance"
                                divClassName="input-4"
                                frameClassName="input-3"
                                frameClassNameOverride="input-5"
                                helper={false}
                                inputFieldBoxClassName="input-2"
                                label={false}
                                leftSampleCopy="Search for giftcards"
                                leftText={false}
                                override={
                                  <Search
                                    className="search-2"
                                    search="/img/vector-8.png"
                                  />
                                }
                                rightIcon={false}
                                rightSample={false}
                                rightText={false}
                                state="default"
                              />
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <img
                                  className="adidas"
                                  alt="Adidas"
                                  src="/img/adidas-2x.png"
                                />

                                <div className="text-wrapper-84">Adidas</div>
                              </div>

                              <div className="frame-79">
                                <img
                                  className="amazon-gift-card-png"
                                  alt="Amazon gift card png"
                                  src="/img/amazon-gift-card-png-2x.png"
                                />

                                <div className="text-wrapper-84">Amazon</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <img
                                  className="american-express-2"
                                  alt="American express"
                                  src="/img/american-express-1.png"
                                />

                                <div className="text-wrapper-85">
                                  American Express
                                </div>
                              </div>

                              <div className="frame-79">
                                <div className="img-wrapper-3">
                                  <img
                                    className="apple-logo-2"
                                    alt="Apple logo"
                                    src="/img/apple-logo-transparent-free-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">
                                  Apple Store
                                </div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <img
                                  className="best-buy-2"
                                  alt="Best buy"
                                  src="/img/best-buy-1-1.png"
                                />

                                <div className="text-wrapper-84">Best Buy</div>
                              </div>

                              <div className="frame-79">
                                <img
                                  className="ebay-2"
                                  alt="Ebay"
                                  src="/img/best-buy-1-1.png"
                                />

                                <div className="text-wrapper-84">Ebay</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <img
                                  className="footlocker-2"
                                  alt="Footlocker"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-84">
                                  Foot Locker
                                </div>
                              </div>

                              <div className="frame-79">
                                <div className="img-wrapper-3">
                                  <img
                                    className="gamestop-2"
                                    alt="Gamestop"
                                    src="/img/best-buy-1-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">GameStop</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <img
                                  className="googleplay-2"
                                  alt="Googleplay"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-84">Google</div>
                              </div>

                              <div className="frame-79">
                                <img
                                  className="homedepot-2"
                                  alt="Homedepot"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-84">
                                  Home Depot
                                </div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-5">
                                  <img
                                    className="itunes-2"
                                    alt="Itunes"
                                    src="/img/itunes.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">iTunes</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-5">
                                  <img
                                    className="macys-logo-black-2"
                                    alt="Macys logo black"
                                    src="/img/macys-logo-black-transparent.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Macy’s</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="netflix-2"
                                    alt="Netflix"
                                    src="/img/netflix.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Netflix</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="nike-2"
                                    alt="Nike"
                                    src="/img/nike.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Nike</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="nordstrom-seeklogo-2"
                                    alt="Nordstrom seeklogo"
                                    src="/img/nordstrom-seeklogo.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Nordstorm</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="offgamers-2"
                                    alt="Offgamers"
                                    src="/img/offgamers.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">OffGamers</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="vanilla-2"
                                    alt="Vanilla"
                                    src="/img/vanilla.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">
                                  OneVanilla
                                </div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="playstation-logo-2"
                                    alt="Playstation logo"
                                    src="/img/playstation-logo-wine.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">
                                  PlayStation
                                </div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="razer-logo-2"
                                    alt="Razer logo"
                                    src="/img/razer-logo-transparent-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Razer</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="sephora-logo-png-2"
                                    alt="Sephora logo png"
                                    src="/img/sephora-logo-png-seeklogo-208666.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Sephora</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="steam-2"
                                    alt="Steam"
                                    src="/img/steam.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Steam</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="target-2"
                                    alt="Target"
                                    src="/img/target.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Target</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="element-visa-2"
                                    alt="Element visa"
                                    src="/img/857-visa.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Visa</div>
                              </div>

                              <div className="frame-79">
                                <div className="giftcards-6">
                                  <img
                                    className="walmart-logo-2"
                                    alt="Walmart logo"
                                    src="/img/walmart-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Walmart</div>
                              </div>
                            </div>

                            <div className="frame-78">
                              <div className="frame-80">
                                <div className="giftcards-6">
                                  <img
                                    className="xbox-logo-2"
                                    alt="Xbox logo"
                                    src="/img/xbox-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-84">Xbox</div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-81">
                            <StateWalletWrapper
                              FABPropertyRampClassName="bottom-navigation-17"
                              FABRectangleClassName="bottom-navigation-19"
                              FABVector="/img/vector-8.png"
                              FABVectorClassName="bottom-navigation-18"
                              className="bottom-navigation-10"
                              divClassName="bottom-navigation-13"
                              divClassName1="bottom-navigation-13"
                              divClassName2="bottom-navigation-13"
                              divClassNameOverride="bottom-navigation-16"
                              frameClassName="bottom-navigation-11"
                              frameClassName1="bottom-navigation-11"
                              frameClassName2="bottom-navigation-11"
                              frameClassName3="bottom-navigation-11"
                              frameClassNameOverride="bottom-navigation-11"
                              giftcardClassName="bottom-navigation-14"
                              homeHome="/img/vector-8.png"
                              homeHomeClassName="bottom-navigation-12"
                              state="giftcards"
                              userPropertyClassName="bottom-navigation-21"
                              userPropertyUserlight="/img/vector-8.png"
                              vector="/img/vector-8.png"
                              vectorClassName="bottom-navigation-15"
                              walletStateFilledClassName="bottom-navigation-20"
                              walletStateOutline="/img/vector-8.png"
                            />
                            <HomeIndicatorWrapper
                              className="home-indicator-7"
                              homeIndicatorHomeIndicatorClassName="home-indicator-9"
                              homeIndicatorThemeLightIphoneClassName="home-indicator-8"
                            />
                          </div>
                        </div>

                        <div className="status-bars-4">
                          <div className="statusbar-ios-4">
                            <div className="left-side-4">
                              <StatusbarsTime
                                className="statusbars-time-5"
                                darkMode={false}
                                time="9:41"
                                timeClassName="statusbars-time-6"
                                type="default"
                              />
                            </div>

                            <div className="right-side-5">
                              <img
                                className="icon-mobile-signal-5"
                                alt="Icon mobile signal"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="wifi-5"
                                alt="Wifi"
                                src="/img/vector-8.png"
                              />

                              <div className="statusbar-battery-4">
                                <img
                                  className="outline-4"
                                  alt="Outline"
                                  src="/img/vector-8.png"
                                />

                                <img
                                  className="battery-end-4"
                                  alt="Battery end"
                                  src="/img/vector-8.png"
                                />

                                <div className="percentage-5">70</div>
                              </div>
                            </div>
                          </div>

                          <DynamicIsland
                            cameraClassName="dynamic-island-12"
                            className="dynamic-island-9"
                            facetimeCameraClassName="dynamic-island-11"
                            size="compact"
                            truedepthCameraClassName="dynamic-island-10"
                            type="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-51">
                  <p className="text-wrapper-71">
                    Buy and Sell Gift Cards Instantly.
                  </p>

                  <p className="text-wrapper-72">
                    Turn unused gift cards into crypto or fiat, or purchase
                    popular gift cards using your digital assets or local
                    currency.
                  </p>
                </div>
              </div>
            </div>

            <div className="frame-53">
              <div className="frame-54">
                <div className="frame-82">
                  <div className="group-16">
                    <div className="overlap-9">
                      <div className="group-17">
                        <div className="overlap-10">
                          <img
                            className="rectangle-27"
                            alt="Rectangle"
                            src="/img/rectangle-3-2.png"
                          />

                          <div className="giftcards-7">
                            <div className="overlap-11">
                              <div className="frame-83">
                                <div className="frame-84">
                                  <div className="frame-85">
                                    <div className="caret-left-2">
                                      <img
                                        className="vector-49"
                                        alt="Vector"
                                        src="/img/vector-59.png"
                                      />
                                    </div>
                                  </div>

                                  <div className="frame-86" />
                                </div>

                                <div className="frame-87">
                                  <div className="frame-88">
                                    <div className="frame-89">
                                      <Logo
                                        className="logo-8"
                                        divClassName="logo-11"
                                        fluentEmojiHighClassName="logo-9"
                                        variant="brand"
                                        vector="/img/vector-74-12-2x.png"
                                        vectorClassName="logo-10"
                                      />
                                      <p className="text-wrapper-86">
                                        Swap assets easily with bramp.
                                      </p>
                                    </div>

                                    <div className="frame-89">
                                      <div className="input-field-box-5">
                                        <div className="text-wrapper-87">
                                          Sell
                                        </div>

                                        <div className="frame-32">
                                          <div className="frame-90">
                                            <div className="input-field-box-6">
                                              <div className="frame-91">
                                                <div className="icon-bitcoin">
                                                  <div className="group-18">
                                                    <div className="overlap-group-21">
                                                      <img
                                                        className="vector-50"
                                                        alt="Vector"
                                                        src="/img/vector-8.png"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="text-wrapper-88">
                                                  BTC
                                                </div>

                                                <CaretDown
                                                  caretDown="/img/vector-8.png"
                                                  className="caret-down-2"
                                                />
                                              </div>
                                            </div>

                                            <div className="frame-92">
                                              <Wallet
                                                className="wallet-instance"
                                                state="outline"
                                                stateOutline="/img/vector-8.png"
                                              />
                                              <div className="frame-93">
                                                <div className="text-wrapper-89">
                                                  0.00045 BTC
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="frame-94">
                                            <div className="text-wrapper-90">
                                              0.00
                                            </div>

                                            <div className="text-wrapper-91">
                                              0.00 BTC
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="input-field-box-5">
                                        <div className="text-wrapper-87">
                                          Buy
                                        </div>

                                        <div className="frame-32">
                                          <div className="frame-90">
                                            <div className="input-field-box-6">
                                              <div className="frame-91">
                                                <img
                                                  className="icon-ethereum-2"
                                                  alt="Icon ethereum"
                                                  src="/img/vector-8.png"
                                                />

                                                <div className="text-wrapper-88">
                                                  NGNB
                                                </div>

                                                <CaretDown
                                                  caretDown="/img/vector-8.png"
                                                  className="caret-down-3"
                                                />
                                              </div>
                                            </div>

                                            <div className="frame-92">
                                              <Wallet
                                                className="wallet-2"
                                                state="outline"
                                                stateOutline="/img/vector-8.png"
                                              />
                                              <div className="frame-93">
                                                <div className="text-wrapper-89">
                                                  845,333 NGNB
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="frame-94">
                                            <div className="text-wrapper-90">
                                              0.00
                                            </div>

                                            <div className="frame-40">
                                              <div className="hugeicons-dollar-2">
                                                <img
                                                  className="vector-51"
                                                  alt="Vector"
                                                  src="/img/vector-8.png"
                                                />
                                              </div>

                                              <div className="text-wrapper-89">
                                                0
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="FAB-3">
                                        <div className="iconamoon-swap-light">
                                          <img
                                            className="vector-52"
                                            alt="Vector"
                                            src="/img/vector-8.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <ButtonMain
                                    buttonText="Swap"
                                    className="button-main-3"
                                    color="primary"
                                    frameClassName="button-main-4"
                                    leftIcon={false}
                                    rightIcon={false}
                                    size="large"
                                    state="disabled"
                                  />
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <img
                                      className="american-express-3"
                                      alt="American express"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="text-wrapper-92">
                                      American Express
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="img-wrapper-4">
                                      <img
                                        className="apple-logo-3"
                                        alt="Apple logo"
                                        src="/img/apple-logo-transparent-free-png.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Apple Store
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <img
                                      className="best-buy-3"
                                      alt="Best buy"
                                      src="/img/best-buy-1-2.png"
                                    />

                                    <div className="text-wrapper-93">
                                      Best Buy
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <img
                                      className="ebay-3"
                                      alt="Ebay"
                                      src="/img/best-buy-1-2.png"
                                    />

                                    <div className="text-wrapper-93">Ebay</div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <img
                                      className="footlocker-3"
                                      alt="Footlocker"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="text-wrapper-93">
                                      Foot Locker
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="img-wrapper-4">
                                      <img
                                        className="gamestop-3"
                                        alt="Gamestop"
                                        src="/img/best-buy-1-2.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      GameStop
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <img
                                      className="googleplay-3"
                                      alt="Googleplay"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="text-wrapper-93">
                                      Google
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <img
                                      className="homedepot-3"
                                      alt="Homedepot"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="text-wrapper-93">
                                      Home Depot
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-8">
                                      <img
                                        className="itunes-3"
                                        alt="Itunes"
                                        src="/img/itunes.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      iTunes
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-8">
                                      <img
                                        className="macys-logo-black-3"
                                        alt="Macys logo black"
                                        src="/img/macys-logo-black-transparent.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Macy’s
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="netflix-3"
                                        alt="Netflix"
                                        src="/img/netflix.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Netflix
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="nike-3"
                                        alt="Nike"
                                        src="/img/nike.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">Nike</div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="nordstrom-seeklogo-3"
                                        alt="Nordstrom seeklogo"
                                        src="/img/nordstrom-seeklogo.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Nordstorm
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="offgamers-3"
                                        alt="Offgamers"
                                        src="/img/offgamers.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      OffGamers
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="vanilla-3"
                                        alt="Vanilla"
                                        src="/img/vanilla.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      OneVanilla
                                    </div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="playstation-logo-3"
                                        alt="Playstation logo"
                                        src="/img/playstation-logo-wine.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      PlayStation
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="razer-logo-3"
                                        alt="Razer logo"
                                        src="/img/razer-logo-transparent-png.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">Razer</div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="sephora-logo-png-3"
                                        alt="Sephora logo png"
                                        src="/img/sephora-logo-png-seeklogo-208666.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Sephora
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="steam-3"
                                        alt="Steam"
                                        src="/img/steam.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">Steam</div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="target-3"
                                        alt="Target"
                                        src="/img/target.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Target
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="element-visa-3"
                                        alt="Element visa"
                                        src="/img/857-visa.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">Visa</div>
                                  </div>

                                  <div className="frame-96">
                                    <div className="giftcards-9">
                                      <img
                                        className="walmart-logo-3"
                                        alt="Walmart logo"
                                        src="/img/walmart-logo-1.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">
                                      Walmart
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-95">
                                  <div className="frame-97">
                                    <div className="giftcards-9">
                                      <img
                                        className="xbox-logo-3"
                                        alt="Xbox logo"
                                        src="/img/xbox-logo-1.png"
                                      />
                                    </div>

                                    <div className="text-wrapper-93">Xbox</div>
                                  </div>
                                </div>
                              </div>

                              <div className="frame-98">
                                <HomeIndicatorWrapper
                                  className="home-indicator-10"
                                  homeIndicatorHomeIndicatorClassName="home-indicator-12"
                                  homeIndicatorThemeLightIphoneClassName="home-indicator-11"
                                />
                              </div>
                            </div>

                            <div className="status-bars-5">
                              <div className="statusbar-ios-5">
                                <div className="left-side-5">
                                  <StatusbarsTime
                                    className="statusbars-time-7"
                                    darkMode={false}
                                    time="9:41"
                                    timeClassName="statusbars-time-8"
                                    type="default"
                                  />
                                </div>

                                <div className="right-side-6">
                                  <img
                                    className="icon-mobile-signal-6"
                                    alt="Icon mobile signal"
                                    src="/img/vector-8.png"
                                  />

                                  <img
                                    className="wifi-6"
                                    alt="Wifi"
                                    src="/img/vector-8.png"
                                  />

                                  <div className="statusbar-battery-5">
                                    <img
                                      className="outline-5"
                                      alt="Outline"
                                      src="/img/vector-8.png"
                                    />

                                    <img
                                      className="battery-end-5"
                                      alt="Battery end"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="percentage-6">70</div>
                                  </div>
                                </div>
                              </div>

                              <DynamicIsland
                                cameraClassName="dynamic-island-16"
                                className="dynamic-island-13"
                                facetimeCameraClassName="dynamic-island-15"
                                size="compact"
                                truedepthCameraClassName="dynamic-island-14"
                                type="default"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="wallet-3">
                        <div className="overlap-12">
                          <div className="frame-99">
                            <div className="frame-25">
                              <div className="frame-100">
                                <img
                                  className="avatar-image-2"
                                  alt="Avatar image"
                                  src="/img/avatar-image-1.png"
                                />

                                <div className="frame-27">
                                  <p className="hello-adebayo-2">
                                    <span className="text-wrapper-94">
                                      Hello,
                                    </span>

                                    <span className="text-wrapper-52">
                                      &nbsp;
                                    </span>

                                    <span className="text-wrapper-53">
                                      Adebayo
                                    </span>
                                  </p>

                                  <div className="text-wrapper-95">
                                    @adeby78
                                  </div>
                                </div>
                              </div>

                              <Icons
                                className="icons-13"
                                icons="/img/icons-22.png"
                              />
                            </div>

                            <div className="frame-101">
                              <div className="rectangle-28" />

                              <div className="frame-102">
                                <div className="frame-100">
                                  <div className="text-wrapper-96">
                                    Total Portfolio Balance
                                  </div>

                                  <See
                                    className="see-2"
                                    property1="view"
                                    propertyView="/img/see-1.png"
                                  />
                                </div>

                                <div className="frame-103">
                                  <img
                                    className="vector-53"
                                    alt="Vector"
                                    src="/img/vector-64.png"
                                  />

                                  <div className="text-wrapper-97">
                                    325,000.00
                                  </div>
                                </div>
                              </div>

                              <img
                                className="cryptowallets-2"
                                alt="Cryptowallets"
                                src="/img/cryptowallets-showing-1.png"
                              />
                            </div>

                            <div className="frame-89">
                              <div className="frame-25">
                                <div className="text-wrapper-98">
                                  Quick Links
                                </div>

                                <div className="frame-103">
                                  <div className="text-wrapper-99">
                                    View more
                                  </div>

                                  <CaretRightRegular
                                    caretRightRegular="/img/vector-8.png"
                                    className="caret-right-regular-2"
                                  />
                                </div>
                              </div>

                              <div className="frame-32">
                                <div className="frame-104">
                                  <div className="deposit-instance-wrapper">
                                    <Deposit
                                      className="deposit-instance"
                                      deposit="/img/vector-8.png"
                                    />
                                  </div>

                                  <div className="text-wrapper-91">Deposit</div>
                                </div>

                                <div className="frame-104">
                                  <div className="frame-105">
                                    <div className="guidance-send-2">
                                      <img
                                        className="vector-54"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />
                                    </div>
                                  </div>

                                  <div className="text-wrapper-91">
                                    Transfer
                                  </div>
                                </div>

                                <div className="frame-104">
                                  <div className="frame-106">
                                    <Markets
                                      className="markets-instance"
                                      property1="coins-light"
                                      propertyCoins="/img/vector-8.png"
                                    />
                                  </div>

                                  <div className="text-wrapper-91">Swap</div>
                                </div>

                                <div className="frame-104">
                                  <div className="frame-106">
                                    <Utilities
                                      className="utilities-2"
                                      utilities="/img/vector-8.png"
                                    />
                                  </div>

                                  <div className="text-wrapper-91">
                                    Utilities
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-107">
                              <div className="frame-32">
                                <div className="frame-108">
                                  <div className="frame-109">
                                    <div className="text-wrapper-100">
                                      Account Setup: 40% complete
                                    </div>

                                    <p className="text-wrapper-101">
                                      Complete your KYC to activate your account
                                    </p>
                                  </div>
                                </div>

                                <CaretRightRegular
                                  caretRightRegular="/img/vector-8.png"
                                  className="caret-right-regular-3"
                                />
                              </div>

                              <div className="frame-110">
                                <div className="frame-111" />
                              </div>
                            </div>

                            <div className="frame-112">
                              <div className="frame-113">
                                <div className="frame-114">
                                  <div className="customer-information-2">
                                    <div className="text-wrapper-102">
                                      All Assets
                                    </div>
                                  </div>

                                  <div className="overview-2">
                                    <div className="text-wrapper-89">
                                      Crypto
                                    </div>
                                  </div>

                                  <div className="overview-2">
                                    <div className="text-wrapper-89">Fiat</div>
                                  </div>
                                </div>
                              </div>

                              <div className="frame-115">
                                <div className="frame-32">
                                  <div className="frame-100">
                                    <div className="icon-bitcoin-2">
                                      <div className="group-19">
                                        <div className="overlap-group-22">
                                          <img
                                            className="vector-55"
                                            alt="Vector"
                                            src="/img/vector-8.png"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        Bitcoin
                                      </div>

                                      <div className="text-wrapper-104">
                                        BTC
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <IconsWrapper
                                        className="icons-14"
                                        icons="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">
                                        103,058.64
                                      </div>
                                    </div>

                                    <div className="frame-103">
                                      <IconPrintWrapper
                                        className="icons-15"
                                        icon="increase"
                                        iconIncrease="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-106">
                                        4.65%
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-117">
                                  <div className="frame-100">
                                    <img
                                      className="icon-ethereum-3"
                                      alt="Icon ethereum"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        Ethereum
                                      </div>

                                      <div className="text-wrapper-104">
                                        ETH
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <IconsWrapper
                                        className="icons-16"
                                        icons="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">
                                        2,562
                                      </div>
                                    </div>

                                    <div className="frame-103">
                                      <IconPrintWrapper
                                        className="icons-17"
                                        icon="increase"
                                        iconIncrease="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-106">
                                        0.5%
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-32">
                                  <div className="frame-100">
                                    <img
                                      className="icon-ethereum-4"
                                      alt="Icon ethereum"
                                      src="/img/vector-8.png"
                                    />

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        Naira
                                      </div>

                                      <div className="text-wrapper-104">
                                        NGNB
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <CurrencyNgn
                                        className="currency-ngn-2"
                                        currencyNgn="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">
                                        1,600
                                      </div>
                                    </div>

                                    <div className="frame-103">
                                      <div className="text-wrapper-107">0%</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-32">
                                  <div className="frame-100">
                                    <div className="frame-118">
                                      <div className="overlap-group-23">
                                        <img
                                          className="vector-56"
                                          alt="Vector"
                                          src="/img/vector-8.png"
                                        />
                                      </div>
                                    </div>

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        Solana
                                      </div>

                                      <div className="text-wrapper-104">
                                        SOL
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <IconsWrapper
                                        className="icons-18"
                                        icons="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">
                                        167.40
                                      </div>
                                    </div>

                                    <div className="frame-103">
                                      <IconPrintWrapper
                                        className="icons-19"
                                        icon="decrease"
                                        iconDecrease="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-108">
                                        0.94%
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-117">
                                  <div className="frame-100">
                                    <div className="usdt-2">
                                      <div className="group-20">
                                        <div className="overlap-group-24">
                                          <img
                                            className="vector-57"
                                            alt="Vector"
                                            src="/img/vector-8.png"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        USD Tether
                                      </div>

                                      <div className="text-wrapper-104">
                                        USDT
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <IconsWrapper
                                        className="icons-20"
                                        icons="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">1</div>
                                    </div>

                                    <div className="frame-103">
                                      <div className="text-wrapper-107">0%</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-117">
                                  <div className="frame-100">
                                    <div className="frame-119">
                                      <img
                                        className="vector-58"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />

                                      <div className="overlap-group-25">
                                        <img
                                          className="vector-59"
                                          alt="Vector"
                                          src="/img/vector-8.png"
                                        />

                                        <img
                                          className="vector-60"
                                          alt="Vector"
                                          src="/img/vector-8.png"
                                        />
                                      </div>
                                    </div>

                                    <div className="frame-116">
                                      <div className="text-wrapper-103">
                                        USD Coin
                                      </div>

                                      <div className="text-wrapper-104">
                                        USDC
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-94">
                                    <div className="frame-40">
                                      <IconsWrapper
                                        className="icons-21"
                                        icons="/img/vector-8.png"
                                      />
                                      <div className="text-wrapper-105">1</div>
                                    </div>

                                    <div className="frame-103">
                                      <div className="text-wrapper-107">0%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-120">
                            <StateWalletWrapper
                              FABPropertyRampClassName="bottom-navigation-29"
                              FABRectangleClassName="bottom-navigation-31"
                              FABVector="/img/vector-8.png"
                              FABVectorClassName="bottom-navigation-30"
                              className="bottom-navigation-22"
                              divClassName="bottom-navigation-25"
                              divClassName1="bottom-navigation-33"
                              divClassName2="bottom-navigation-33"
                              divClassNameOverride="bottom-navigation-28"
                              frameClassName="bottom-navigation-23"
                              frameClassName1="bottom-navigation-23"
                              frameClassName2="bottom-navigation-23"
                              frameClassName3="bottom-navigation-23"
                              frameClassNameOverride="bottom-navigation-23"
                              giftcardClassName="bottom-navigation-26"
                              homeHome="/img/vector-8.png"
                              homeHomeClassName="bottom-navigation-24"
                              img="/img/vector-8.png"
                              state="wallet"
                              userPropertyClassName="bottom-navigation-34"
                              userPropertyUserlight="/img/vector-8.png"
                              vectorClassName="bottom-navigation-27"
                              walletStateFilledClassName="bottom-navigation-32"
                              walletStateOutline="/img/vector-8.png"
                            />
                            <HomeIndicatorWrapper
                              className="home-indicator-10"
                              homeIndicatorHomeIndicatorClassName="home-indicator-12"
                              homeIndicatorThemeLightIphoneClassName="home-indicator-11"
                            />
                          </div>
                        </div>

                        <div className="status-bars-6">
                          <div className="statusbar-ios-6">
                            <div className="left-side-6">
                              <StatusbarsTime
                                className="statusbars-time-7"
                                darkMode={false}
                                time="9:41"
                                timeClassName="statusbars-time-8"
                                type="default"
                              />
                            </div>

                            <div className="right-side-7">
                              <img
                                className="icon-mobile-signal-7"
                                alt="Icon mobile signal"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="wifi-7"
                                alt="Wifi"
                                src="/img/vector-8.png"
                              />

                              <div className="statusbar-battery-5">
                                <img
                                  className="outline-6"
                                  alt="Outline"
                                  src="/img/vector-8.png"
                                />

                                <img
                                  className="battery-end-6"
                                  alt="Battery end"
                                  src="/img/vector-8.png"
                                />

                                <div className="percentage-6">70</div>
                              </div>
                            </div>
                          </div>

                          <DynamicIsland
                            cameraClassName="dynamic-island-16"
                            className="dynamic-island-17"
                            facetimeCameraClassName="dynamic-island-15"
                            size="compact"
                            truedepthCameraClassName="dynamic-island-14"
                            type="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-51">
                  <div className="text-wrapper-71">
                    Secure and Reliable Wallet.
                  </div>

                  <p className="text-wrapper-72">
                    Safely store and manage your digital assets with our trusted
                    wallet infrastructure.
                  </p>
                </div>
              </div>

              <div className="frame-121">
                <Logo
                  className="logo-12"
                  fluentEmojiHighClassName="design-component-instance-node"
                  showText={false}
                  variant="brand"
                  vector="/img/vector-74-14.png"
                  vectorClassName="logo-2"
                />
                <div className="frame-122">
                  <div className="text-wrapper-109">
                    Experience Seamless Transactions.
                  </div>

                  <p className="text-wrapper-72">
                    Enjoy a fast, intuitive, and hassle-free platform designed
                    for users of all technical levels.
                  </p>
                </div>

                <Btn
                  buttonMainClassName="btn-5"
                  className="btn-4"
                  divClassNameOverride="btn-6"
                  hasDiv={false}
                  property1="default"
                  text1="Get Started"
                  visible={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-2">
        <div className="frame-123">
          <div className="frame-124">
            <div className="frame-122">
              <div className="text-wrapper-110">Start in Minutes</div>

              <div className="frame-122">
                <p className="text-wrapper-111">
                  Create Your Bramp Account
                  <br />
                  Fast, Easy, and Secure
                </p>

                <p className="text-wrapper-112">
                  Join Bramp and get instant access to gift card and crypto
                  trading. We’ve made onboarding smooth so you can start trading
                  without delays.
                </p>
              </div>
            </div>

            <div className="frame-125">
              <div className="frame-126">
                <div className="subway-tick-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Quick Sign Up</div>
              </div>

              <div className="frame-126">
                <div className="subway-tick-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Personal Dashboard</div>
              </div>

              <div className="frame-126">
                <div className="subway-tick-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Built for You</div>
              </div>
            </div>
          </div>

          <div className="frame-127">
            <div className="frame-128">
              <div className="group-21">
                <div className="overlap-group-26">
                  <img
                    className="rectangle-29"
                    alt="Rectangle"
                    src="/img/rectangle-6.png"
                  />

                  <div className="onboarding-III">
                    <div className="status-bars-7">
                      <div className="statusbar-ios-7">
                        <div className="left-side-7">
                          <StatusbarsTime
                            className="statusbars-time-9"
                            darkMode={false}
                            time="9:41"
                            timeClassName="statusbars-time-10"
                            type="default"
                          />
                        </div>

                        <div className="right-side-8">
                          <img
                            className="icon-mobile-signal-8"
                            alt="Icon mobile signal"
                            src="/img/vector-8.png"
                          />

                          <img
                            className="wifi-8"
                            alt="Wifi"
                            src="/img/vector-8.png"
                          />

                          <div className="statusbar-battery-6">
                            <img
                              className="outline-7"
                              alt="Outline"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="battery-end-7"
                              alt="Battery end"
                              src="/img/vector-8.png"
                            />

                            <div className="percentage-7">70</div>
                          </div>
                        </div>
                      </div>

                      <DynamicIsland
                        cameraClassName="dynamic-island-21"
                        className="dynamic-island-18"
                        facetimeCameraClassName="dynamic-island-20"
                        size="compact"
                        truedepthCameraClassName="dynamic-island-19"
                        type="default"
                      />
                    </div>

                    <div className="frame-129">
                      <Logo
                        className="logo-13"
                        divClassName="logo-16"
                        fluentEmojiHighClassName="logo-14"
                        variant="brand"
                        vector="/img/vector-8.png"
                        vectorClassName="logo-15"
                      />
                      <img
                        className="treasure-chest"
                        alt="Treasure chest"
                        src="/img/treasure-chest.png"
                      />

                      <div className="frame-130">
                        <div className="frame-131" />

                        <div className="frame-131" />

                        <div className="frame-132" />
                      </div>

                      <div className="frame-133">
                        <div className="frame-134">
                          <div className="text-wrapper-114">
                            Your Secure Crypto Wallet
                          </div>

                          <p className="text-wrapper-115">
                            Deposit, withdraw, and manage crypto with confidence
                          </p>
                        </div>

                        <div className="frame-135">
                          <ButtonMain
                            buttonText="Sign Up"
                            className="button-main-5"
                            color="primary"
                            frameClassName="button-main-6"
                            leftIcon={false}
                            rightIcon={false}
                            size="large"
                            state="default"
                          />
                          <ButtonMain
                            buttonText="Log In"
                            className="button-main-7"
                            color="secondary"
                            frameClassName="button-main-8"
                            leftIcon={false}
                            rightIcon={false}
                            size="large"
                            state="outline"
                          />
                        </div>
                      </div>
                    </div>

                    <HomeIndicatorWrapper
                      className="home-indicator-13"
                      homeIndicatorHomeIndicatorClassName="home-indicator-15"
                      homeIndicatorThemeLightIphoneClassName="home-indicator-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-123">
          <div className="frame-127">
            <div className="frame-128">
              <div className="group-22">
                <div className="overlap-13">
                  <img
                    className="rectangle-30"
                    alt="Rectangle"
                    src="/img/rectangle-6.png"
                  />

                  <div className="deposit-crypto-II">
                    <div className="overlap-group-27">
                      <div className="bottom-sheet-wrapper">
                        <div className="bottom-sheet-2">
                          <img
                            className="code"
                            alt="Code"
                            src="/img/code.png"
                          />
                        </div>
                      </div>

                      <StatusBars
                        className="status-bars-instance"
                        device="iphone-15"
                        dynamicIslandSizeCompactTypeClassName="status-bars-8"
                        override={
                          <ThemeLightTrue
                            className="design-component-instance-node-3"
                            iconMobileSignal="/img/icon-mobile-signal-12.png"
                            iconMobileSignalClassName="statusbar-ios-9"
                            statusbarBatteryBatteryEnd="/img/icon-mobile-signal-12.png"
                            statusbarBatteryBatteryEndClassName="theme-light-true-instance"
                            statusbarBatteryExclude="/img/vector-8.png"
                            statusbarBatteryOverlapGroupClassName="theme-light-true-type-default-instance"
                            statusbarsTimeTimeClassName="theme-light-true-type-default"
                            wifi="/img/vector-8.png"
                            wifiClassName="statusbar-ios-8"
                          />
                        }
                      />
                      <div className="frame-136">
                        <div className="frame-137">
                          <div className="frame-25">
                            <div className="text-wrapper-116">
                              Deposit Bitcoin
                            </div>

                            <div className="frame-138">
                              <ImgWrapper
                                className="icons-22"
                                icons="/img/vector-8.png"
                              />
                            </div>
                          </div>

                          <div className="frame-139">
                            <div className="frame-25">
                              <div className="text-wrapper-117">
                                Minimum Deposit
                              </div>

                              <div className="text-wrapper-118">0.00001BTC</div>
                            </div>

                            <div className="frame-25">
                              <div className="text-wrapper-117">Network</div>

                              <div className="text-wrapper-118">
                                BSC (BEP20)
                              </div>
                            </div>

                            <div className="frame-122">
                              <div className="text-wrapper-117">
                                Wallet Address
                              </div>

                              <div className="input-field-box-7">
                                <div className="text-wrapper-50">
                                  1A1zP...mv7vfNa
                                </div>

                                <div className="frame-140">
                                  <div className="frame-141">
                                    <EscrowIcons
                                      className="escrow-icons-instance"
                                      icon="copy"
                                      iconCopy="/img/vector-8.png"
                                    />
                                    <div className="text-wrapper-119">Copy</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-142">
                            <ButtonMain
                              buttonText="Save as Image"
                              className="button-main-9"
                              color="primary"
                              frameClassName="button-main-10"
                              leftIcon={false}
                              rightIcon={false}
                              size="large"
                              state="outline"
                            />
                            <ButtonMain
                              buttonText="Share Address"
                              className="button-main-9"
                              color="primary"
                              frameClassName="button-main-10"
                              leftIcon={false}
                              rightIcon={false}
                              size="large"
                              state="default"
                            />
                          </div>
                        </div>

                        <div className="frame-143">
                          <HomeIndicatorWrapper
                            className="home-indicator-16"
                            homeIndicatorHomeIndicatorClassName="home-indicator-18"
                            homeIndicatorThemeLightIphoneClassName="home-indicator-17"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-124">
            <div className="frame-122">
              <div className="text-wrapper-120">Add Funds Easily</div>

              <div className="frame-122">
                <p className="text-wrapper-111">
                  Top Up Your Wallet with Crypto
                  <br />
                  Safely and Instantly
                </p>

                <p className="text-wrapper-112">
                  Funding your Bramp wallet is simple. Choose your preferred
                  token, select the right network, and deposit with confidence
                  using your unique address.
                </p>
              </div>
            </div>

            <div className="frame-125">
              <div className="frame-126">
                <div className="subway-tick-instance-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Multiple Networks</div>
              </div>

              <div className="frame-126">
                <div className="subway-tick-instance-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <p className="text-wrapper-113">QR Code or Manual Copy</p>
              </div>

              <div className="frame-126">
                <div className="subway-tick-instance-wrapper">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Real-Time Confirmation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-123">
          <div className="frame-124">
            <div className="frame-122">
              <div className="text-wrapper-121">Peer-to-Peer Done Right</div>

              <div className="frame-122">
                <p className="text-wrapper-111">
                  Easily Find the Right People to Trade With
                </p>

                <p className="text-wrapper-112">
                  Bramp helps you connect with verified users to trade safely.
                  Whether you’re selling a gift card or receiving crypto, our
                  smart search tools make it simple.
                </p>
              </div>
            </div>

            <div className="frame-125">
              <div className="frame-126">
                <div className="frame-144">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Search by Username</div>
              </div>

              <div className="frame-126">
                <div className="frame-144">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Trade assets in minutes</div>
              </div>

              <div className="frame-126">
                <div className="frame-144">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Secure Trade Records</div>
              </div>
            </div>
          </div>

          <div className="frame-127">
            <div className="frame-128">
              <div className="group-23">
                <div className="overlap-14">
                  <img
                    className="rectangle-31"
                    alt="Rectangle"
                    src="/img/rectangle-4.png"
                  />

                  <div className="transfer-crypto-IV">
                    <div className="frame-145">
                      <div className="frame-146">
                        <div className="input-field-box-8">
                          <div className="frame-147">
                            <Search
                              className="search-3"
                              search="/img/search-3-2x.png"
                            />
                            <div className="text-wrapper-122">ad</div>
                          </div>

                          <div className="frame-148">
                            <ImgWrapper
                              className="icons-23"
                              icons="/img/icons-4-2x.png"
                            />
                          </div>
                        </div>

                        <div className="text-wrapper-123">Cancel</div>
                      </div>

                      <div className="frame-149">
                        <div className="frame-150">
                          <img
                            className="avatar-image-3"
                            alt="Avatar image"
                            src="/img/avatar-image-2.png"
                          />

                          <div className="frame-151">
                            <div className="text-wrapper-122">
                              Abdulaziz Rakeem
                            </div>

                            <div className="text-wrapper-124">@adeby78</div>
                          </div>
                        </div>

                        <div className="frame-150">
                          <img
                            className="avatar-image-3"
                            alt="Avatar image"
                            src="/img/avatar-image-3.png"
                          />

                          <div className="frame-151">
                            <div className="text-wrapper-122">
                              Adnez Brampton
                            </div>

                            <div className="text-wrapper-124">@adddnez</div>
                          </div>
                        </div>

                        <div className="frame-150">
                          <img
                            className="avatar-image-3"
                            alt="Avatar image"
                            src="/img/avatar-image-4.png"
                          />

                          <div className="frame-151">
                            <div className="text-wrapper-122">Hanna Admid</div>

                            <div className="text-wrapper-124">@hunad</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="frame-152">
                      <HomeIndicatorWrapper
                        className="home-indicator-19"
                        homeIndicatorHomeIndicatorClassName="home-indicator-21"
                        homeIndicatorThemeLightIphoneClassName="home-indicator-20"
                      />
                    </div>

                    <StatusBars
                      className="status-bars-12"
                      device="iphone-15"
                      dynamicIslandCameraClassName="status-bars-10"
                      dynamicIslandFacetimeCameraClassName="status-bars-11"
                      dynamicIslandSizeCompactTypeClassName="status-bars-13"
                      dynamicIslandTruedepthCameraClassName="status-bars-9"
                      override={
                        <ThemeLightFalse
                          className="theme-light-false-type-default-instance"
                          iconMobileSignal="/img/icon-mobile-signal-13-2x.png"
                          iconMobileSignalClassName="statusbar-ios-14"
                          leftSideClassName="statusbar-ios-10"
                          rightSideClassName="statusbar-ios-13"
                          statusbarBatteryBatteryEnd="/img/battery-end-23.png"
                          statusbarBatteryBatteryEndClassName="statusbar-ios-16"
                          statusbarBatteryDarkModeFalseClassName="statusbar-ios-19"
                          statusbarBatteryOutline="/img/outline-18.png"
                          statusbarBatteryOutlineClassName="statusbar-ios-17"
                          statusbarBatteryOverlapGroupClassName="statusbar-ios-17"
                          statusbarBatteryPercentageClassName="statusbar-ios-18"
                          statusbarsTimeDarkModeFalseTypeClassName="statusbar-ios-11"
                          statusbarsTimeTimeClassName="statusbar-ios-12"
                          wifi="/img/wifi-13-2x.png"
                          wifiClassName="statusbar-ios-15"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-123">
          <div className="frame-127">
            <div className="frame-128">
              <div className="group-24">
                <div className="overlap-group-28">
                  <img
                    className="rectangle-32"
                    alt="Rectangle"
                    src="/img/rectangle-6.png"
                  />

                  <div className="utilities-3">
                    <div className="frame-153">
                      <div className="frame-139">
                        <div className="frame-25">
                          <div className="frame-138">
                            <div className="caret-left-3">
                              <img
                                className="vector-61"
                                alt="Vector"
                                src="/img/vector-8.png"
                              />
                            </div>
                          </div>

                          <div className="text-wrapper-116">Utilities</div>

                          <div className="frame-154" />
                        </div>

                        <div className="frame-125">
                          <div className="text-wrapper-125">Pay Bills</div>

                          <div className="frame-142">
                            <div className="frame-155">
                              <div className="frame-156">
                                <Airtime
                                  airtime="/img/airtime-1.png"
                                  className="design-component-instance-node-6"
                                />
                              </div>

                              <div className="text-wrapper-126">Airtime</div>
                            </div>

                            <div className="frame-157">
                              <div className="frame-156">
                                <Data
                                  className="design-component-instance-node-6"
                                  data="/img/data-1-2x.png"
                                />
                              </div>

                              <div className="text-wrapper-126">Data</div>
                            </div>
                          </div>

                          <div className="frame-142">
                            <div className="frame-158">
                              <div className="frame-156">
                                <Betting
                                  betting="/img/betting-1-2x.png"
                                  className="design-component-instance-node-6"
                                />
                              </div>

                              <div className="text-wrapper-126">Betting</div>
                            </div>

                            <div className="frame-159">
                              <div className="frame-156">
                                <Electricity
                                  className="design-component-instance-node-6"
                                  electricity="/img/electricity-1-2x.png"
                                />
                              </div>

                              <div className="text-wrapper-126">
                                Electricity
                              </div>
                            </div>
                          </div>

                          <div className="frame-142">
                            <div className="frame-160">
                              <div className="frame-156">
                                <Cable
                                  cable="/img/cable-1.png"
                                  className="design-component-instance-node-6"
                                />
                              </div>

                              <div className="text-wrapper-126">Cable</div>
                            </div>

                            <div className="frame-161" />
                          </div>
                        </div>
                      </div>

                      <div className="frame-162">
                        <div className="frame-25">
                          <div className="text-wrapper-125">
                            Recent Transactions
                          </div>

                          <div className="frame-163">
                            <div className="text-wrapper-127">View All</div>

                            <CaretRight
                              caretRight="/img/vector-8.png"
                              className="caret-right-instance"
                            />
                          </div>
                        </div>

                        <div className="frame-125">
                          <div className="frame-164">
                            <div className="frame-165">
                              <div className="text-wrapper-117">Airtime</div>

                              <div className="text-wrapper-128">Successful</div>
                            </div>

                            <div className="frame-140">
                              <div className="text-wrapper-117">-5000 NGNB</div>

                              <div className="jan">
                                Jan 16, 2025&nbsp;&nbsp;12:30pm
                              </div>
                            </div>
                          </div>

                          <div className="frame-164">
                            <div className="frame-165">
                              <div className="text-wrapper-117">
                                Electricity
                              </div>

                              <div className="text-wrapper-128">Successful</div>
                            </div>

                            <div className="frame-140">
                              <div className="text-wrapper-117">
                                -3,000 NGNB
                              </div>

                              <div className="jan">
                                Jan 5, 2025&nbsp;&nbsp;9:30pm
                              </div>
                            </div>
                          </div>

                          <div className="frame-166">
                            <div className="frame-165">
                              <div className="text-wrapper-117">Data</div>

                              <div className="text-wrapper-129">Failed</div>
                            </div>

                            <div className="frame-140">
                              <div className="text-wrapper-117">
                                -6,600 NGNB
                              </div>

                              <div className="jan">
                                Jan 5, 2025&nbsp;&nbsp;9:30pm
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-124">
            <div className="frame-122">
              <div className="text-wrapper-130">Do More with Bramp</div>

              <div className="frame-122">
                <p className="text-wrapper-111">
                  Use Your Balance to Pay Bills Instantly
                </p>

                <p className="text-wrapper-112">
                  Bramp isn’t just for trading , you can use your crypto
                  earnings to pay for everyday needs like airtime, electricity,
                  and internet, straight from your wallet.
                </p>
              </div>
            </div>

            <div className="frame-125">
              <div className="frame-126">
                <div className="frame-167">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Airtime Top-Up</div>
              </div>

              <div className="frame-126">
                <div className="frame-167">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Electricity Payments</div>
              </div>

              <div className="frame-126">
                <div className="frame-167">
                  <SubwayTick
                    className="subway-tick-instance"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-113">Internet &amp; Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="FA-qs-2">
        <div className="frame-168">
          <div className="text-wrapper-131">Frequently Asked Questions</div>
        </div>

        <div className="frame-169">
          <FaQs
            FAQHeader="How do I get started with Bramp?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="What cryptocurrencies can I buy and sell?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="How long do crypto transactions take?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="Is my wallet secure?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="Why do I need to complete KYC?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="What documents are required for KYC?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="How can I get help if I have a problem?"
            className="design-component-instance-node-7"
            stateProp="closed"
          />
        </div>
      </div>

      <div className="features-3">
        <div className="frame-170">
          <div className="frame-171">
            <Logo
              className="logo-17"
              fluentEmojiHighClassName="logo-18"
              showText={false}
              variant="black"
              vector="/img/vector-74-16.png"
              vectorClassName="logo-19"
            />
            <div className="frame-172">
              <p className="text-wrapper-132">
                Ready to Experience the Future of Trading?
              </p>

              <p className="text-wrapper-133">
                Join thousands already trading smarter
              </p>
            </div>

            <Btn
              buttonMainClassName="btn-8"
              className="btn-7"
              divClassNameOverride="btn-6"
              hasDiv={false}
              property1="default"
              text1="Get Started"
              visible={false}
            />
          </div>

          <CoinCardano className="coin-cardano-cam" />
          <CoinBitcoin className="coin-bitcoin-cam" />
          <CoinStellar className="coin-stellar-cam" />
          <div className="coin-binance">
            <div className="overlap-15">
              <div className="coin-4">
                <div className="overlap-group-29">
                  <img
                    className="coin-mask"
                    alt="Coin mask"
                    src="/img/coin-mask-3.png"
                  />
                </div>
              </div>

              <div className="icon-5">
                <img
                  className="icon-mask"
                  alt="Icon mask"
                  src="/img/icon-mask-1-2x.png"
                />
              </div>
            </div>
          </div>

          <CoinEthereum className="coin-ethereum-cam" />
        </div>
      </div>

      <footer className="footer">
        <div className="frame-22">
          <div className="frame-173">
            <Logo className="logo-20" variant="b-w" />
            <div className="frame-174">
              <div className="frame-175">
                <div className="text-wrapper-134">Product</div>

                <div className="frame-175">
                  <div className="text-wrapper-135">Capabilities</div>

                  <div className="text-wrapper-136">Features</div>
                </div>
              </div>

              <div className="frame-175">
                <div className="text-wrapper-134">Resources</div>

                <div className="frame-175">
                  <div className="text-wrapper-135">Blog</div>

                  <div className="text-wrapper-136">FAQs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="frame-125">
              <div className="frame-176">
                <div className="text-wrapper-137">NEWSLETTER</div>
              </div>

              <p className="text-wrapper-138">
                Sign Up to be the first to know about the latest trends and
                events in the crypto world
              </p>
            </div>

            <div className="frame-169">
              <Input
                className="design-component-instance-node-7"
                frameClassName="input-6"
                helper={false}
                label={false}
                leftIcon={false}
                leftSampleCopy="Your Name"
                leftText={false}
                rightIcon={false}
                rightSample={false}
                rightText={false}
                state="default"
              />
              <Input
                className="design-component-instance-node-7"
                frameClassName="input-6"
                helper={false}
                label={false}
                leftIcon={false}
                leftSampleCopy="Your Email"
                leftText={false}
                rightIcon={false}
                rightSample={false}
                rightText={false}
                state="default"
              />
              <ButtonMain
                buttonText="Get Started"
                className="button-main-11"
                color="secondary"
                frameClassName="button-main-10"
                leftIcon={false}
                rightIcon={false}
                size="large"
                state="default"
              />
            </div>
          </div>

          <div className="contact-2">
            <div className="frame-175">
              <div className="frame-176">
                <div className="text-wrapper-137">GET IN TOUCH</div>
              </div>

              <div className="frame-177">
                <div className="frame-163">
                  <img
                    className="vector-62"
                    alt="Vector"
                    src="/img/vector-78.png"
                  />

                  <div className="text-wrapper-139">hello@bramp.io</div>
                </div>

                <img className="line-6" alt="Line" src="/img/line-17.png" />
              </div>
            </div>

            <div className="frame-125">
              <div className="frame-122">
                <div className="text-wrapper-140">Address</div>

                <p className="text-wrapper-138">
                  2125 Bad Boys Lane, Wuse 2, Abuja
                </p>
              </div>

              <div className="frame-122">
                <div className="text-wrapper-140">Office Hours</div>

                <p className="text-wrapper-138">
                  Monday to Friday: 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            <div className="socials">
              <div className="frame-178">
                <IconMenuWrapper
                  className="icons-24"
                  icon="twitter"
                  iconTwitter="/img/icons-35-2x.png"
                />
              </div>

              <div className="frame-179">
                <IconMenuWrapper
                  className="design-component-instance-node-2"
                  icon="youtube-outline"
                  iconYoutubeOutline="/img/icons-34-2x.png"
                />
              </div>

              <div className="frame-179">
                <IconMenuWrapper
                  className="design-component-instance-node-2"
                  icon="instagram"
                  iconInstagram="/img/icons-12-2x.png"
                />
              </div>

              <div className="frame-179">
                <IconMenuWrapper
                  className="design-component-instance-node-2"
                  icon="facebook-1"
                  iconFacebook="/img/icons-13-2x.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-180">
          <div className="frame-181">
            <div className="frame-40">
              <div className="ph-copyright">
                <img
                  className="vector-63"
                  alt="Vector"
                  src="/img/vector-80.png"
                />
              </div>

              <div className="text-wrapper-141">Bramp 2025</div>
            </div>

            <div className="text-wrapper-141">All Rights Reserved</div>
          </div>

          <div className="frame-182">
            <div className="text-wrapper-142">Terms of Use</div>

            <div className="text-wrapper-142">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
