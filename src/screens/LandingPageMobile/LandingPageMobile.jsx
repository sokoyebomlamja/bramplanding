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
import { CurrencyNgn } from "../../components/CurrencyNgn";
import { Data } from "../../components/Data";
import { Deposit } from "../../components/Deposit";
import { DynamicIsland } from "../../components/DynamicIsland";
import { Electricity } from "../../components/Electricity";
import { EscrowIcons } from "../../components/EscrowIcons";
import { FaQs } from "../../components/FaQs";
import { History } from "../../components/History";
import { HomeIndicatorWrapper } from "../../components/HomeIndicatorWrapper";
import { IOs } from "../../components/IOs";
import { IconMenuWrapper } from "../../components/IconMenuWrapper";
import { IconPrintWrapper } from "../../components/IconPrintWrapper";
import { Icons } from "../../components/Icons";
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

export const LandingPageMobile = () => {
  return (
    <div className="landing-page-mobile">
      <div className="top-2">
        <img className="group-25" alt="Group" src="/img/group-1-2.png" />

        <header className="header-2">
          <Logo
            className="logo-37"
            divClassName="logo-40"
            fluentEmojiHighClassName="logo-38"
            variant="brand"
            vector="/img/vector-74-9.png"
            vectorClassName="logo-39"
          />
          <div className="hugeicons-menu">
            <img className="vector-64" alt="Vector" src="/img/vector-32.png" />
          </div>
        </header>

        <div className="hero-section-2">
          <div className="left-side-8">
            <div className="headline-subheadline-2">
              <p className="text-wrapper-143">
                Take control of your digital assets
              </p>

              <p className="text-wrapper-144">
                With Bramp, you’re in charge — buy, sell, and trade crypto and
                gift cards on your own terms, securely and instantly.
              </p>

              <div className="frame-191">
                <div className="mdi-stars-2">
                  <img
                    className="vector-65"
                    alt="Vector"
                    src="/img/vector-33.png"
                  />
                </div>

                <p className="text-wrapper-145">No Hassle, No Hidden Fees</p>
              </div>
            </div>

            <div className="frame-192">
              <div className="button-main-wrapper">
                <div className="button-main-12">
                  <IOs
                    className="design-component-instance-node-8"
                    iOs="/img/ios-3.png"
                  />
                  <div className="frame-193">
                    <div className="text-wrapper-146">Download on the</div>

                    <div className="text-wrapper-147">App Store</div>
                  </div>
                </div>
              </div>

              <div className="btn-9">
                <div className="button-main-13">
                  <PlayStore
                    className="design-component-instance-node-8"
                    playStore="/img/play-store-1.png"
                  />
                  <div className="frame-193">
                    <div className="download-on-the-2">Get it on</div>

                    <div className="text-wrapper-148">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left-side-9">
            <img
              className="free-iphone-pro-2"
              alt="Free iphone pro"
              src="/img/free-iphone-15-pro-hand-mockup-mockuuups-studio.png"
            />
          </div>
        </div>
      </div>

      <div className="features-4">
        <div className="text-wrapper-149">Secure and Seamless Transactions</div>

        <div className="frame-194">
          <div className="frame-195">
            <div className="frame-196">
              <div className="group-26">
                <div className="overlap-16">
                  <img
                    className="rectangle-40"
                    alt="Rectangle"
                    src="/img/rectangle-7.png"
                  />

                  <div className="deposit-3">
                    <div className="overlap-17">
                      <div className="frame-197">
                        <div className="frame-198">
                          <div className="frame-199">
                            <img
                              className="avatar-image-4"
                              alt="Avatar image"
                              src="/img/vector-8.png"
                            />

                            <div className="frame-193">
                              <p className="hello-adebayo-3">
                                <span className="text-wrapper-150">Hello,</span>

                                <span className="text-wrapper-151">&nbsp;</span>

                                <span className="text-wrapper-152">
                                  Adebayo
                                </span>
                              </p>

                              <div className="text-wrapper-153">@adeby78</div>
                            </div>
                          </div>

                          <Icons
                            className="icons-25"
                            icons="/img/vector-8.png"
                          />
                        </div>

                        <div className="frame-200">
                          <div className="rectangle-41" />

                          <div className="frame-201">
                            <div className="frame-199">
                              <div className="text-wrapper-154">
                                Total Portfolio Balance
                              </div>

                              <See
                                className="see-3"
                                property1="view"
                                propertyView="/img/vector-8.png"
                              />
                            </div>

                            <div className="frame-202">
                              <img
                                className="vector-66"
                                alt="Vector"
                                src="/img/vector-8.png"
                              />

                              <div className="text-wrapper-155">0.00</div>
                            </div>
                          </div>

                          <img
                            className="cryptowallets-3"
                            alt="Cryptowallets"
                            src="/img/cryptowallets-showing-1-2x.png"
                          />
                        </div>

                        <div className="frame-203">
                          <div className="frame-198">
                            <div className="text-wrapper-156">Quick Links</div>

                            <div className="frame-202">
                              <div className="text-wrapper-157">View more</div>

                              <CaretRightRegular
                                caretRightRegular="/img/vector-8.png"
                                className="caret-right-regular-4"
                              />
                            </div>
                          </div>

                          <div className="frame-204">
                            <div className="frame-205">
                              <div className="frame-206">
                                <Deposit
                                  className="deposit-4"
                                  deposit="/img/deposit-1.png"
                                />
                              </div>

                              <div className="text-wrapper-158">Deposit</div>
                            </div>

                            <div className="frame-205">
                              <div className="frame-207">
                                <div className="guidance-send-3" />
                              </div>

                              <div className="text-wrapper-158">Transfer</div>
                            </div>

                            <div className="frame-205">
                              <div className="frame-208">
                                <Markets
                                  className="markets-2"
                                  property1="coins-light"
                                  propertyCoins="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-158">Swap</div>
                            </div>

                            <div className="frame-205">
                              <div className="frame-208">
                                <Utilities
                                  className="utilities-4"
                                  utilities="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-158">Utilities</div>
                            </div>
                          </div>
                        </div>

                        <div className="frame-209">
                          <div className="frame-210">
                            <div className="frame-211">
                              <div className="customer-information-3">
                                <div className="text-wrapper-159">
                                  All Assets
                                </div>
                              </div>

                              <div className="overview-3">
                                <div className="text-wrapper-160">Crypto</div>
                              </div>

                              <div className="overview-3">
                                <div className="text-wrapper-160">Fiat</div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-212">
                            <div className="frame-204">
                              <div className="frame-199">
                                <div className="icon-ethereum-5">
                                  <div className="group-27">
                                    <img
                                      className="vector-67"
                                      alt="Vector"
                                      src="/img/vector-37-2x.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-213">
                                  <div className="text-wrapper-161">
                                    Bitcoin
                                  </div>

                                  <div className="text-wrapper-162">BTC</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-26"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">
                                    103,058.64
                                  </div>
                                </div>

                                <div className="frame-202">
                                  <IconPrintWrapper
                                    className="icons-27"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-164">4.65%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-199">
                                <img
                                  className="icon-ethereum-5"
                                  alt="Icon ethereum"
                                  src="/img/icon-ethereum-cryptocurrency-4.png"
                                />

                                <div className="frame-213">
                                  <div className="text-wrapper-161">
                                    Ethereum
                                  </div>

                                  <div className="text-wrapper-162">ETH</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-28"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">2,562</div>
                                </div>

                                <div className="frame-202">
                                  <IconPrintWrapper
                                    className="icons-29"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-164">0.5%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-199">
                                <img
                                  className="icon-ethereum-5"
                                  alt="Icon ethereum"
                                  src="/img/icon-ethereum-cryptocurrency.png"
                                />

                                <div className="frame-213">
                                  <div className="text-wrapper-161">Naira</div>

                                  <div className="text-wrapper-162">NGNB</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <CurrencyNgn
                                    className="currency-ngn-3"
                                    currencyNgn="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">1,600</div>
                                </div>

                                <div className="frame-202">
                                  <div className="text-wrapper-165">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-199">
                                <div className="frame-216">
                                  <img
                                    className="vector-68"
                                    alt="Vector"
                                    src="/img/vector-39.png"
                                  />
                                </div>

                                <div className="frame-213">
                                  <div className="text-wrapper-161">Solana</div>

                                  <div className="text-wrapper-162">SOL</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-30"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">167.40</div>
                                </div>

                                <div className="frame-202">
                                  <IconPrintWrapper
                                    className="icons-31"
                                    icon="decrease"
                                    iconDecrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-166">0.94%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-199">
                                <div className="usdt-3">
                                  <div className="group-28">
                                    <div className="overlap-group-30">
                                      <img
                                        className="vector-69"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-213">
                                  <div className="text-wrapper-161">
                                    USD Tether
                                  </div>

                                  <div className="text-wrapper-162">USDT</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-32"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">1</div>
                                </div>

                                <div className="frame-202">
                                  <div className="text-wrapper-165">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-199">
                                <div className="frame-217">
                                  <div className="overlap-group-31">
                                    <img
                                      className="vector-70"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />

                                    <img
                                      className="vector-71"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-213">
                                  <div className="text-wrapper-161">
                                    USD Coin
                                  </div>

                                  <div className="text-wrapper-162">USDC</div>
                                </div>
                              </div>

                              <div className="frame-214">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-33"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-163">1</div>
                                </div>

                                <div className="frame-202">
                                  <div className="text-wrapper-165">0%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="frame-218">
                        <BottomNavigation
                          className="bottom-navigation-35"
                          destination="home"
                          divClassName="bottom-navigation-38"
                          divClassName1="bottom-navigation-40"
                          divClassName2="bottom-navigation-40"
                          divClassName3="bottom-navigation-40"
                          divClassNameOverride="bottom-navigation-40"
                          frameClassName="bottom-navigation-36"
                          frameClassName1="bottom-navigation-36"
                          frameClassName2="bottom-navigation-36"
                          frameClassName3="bottom-navigation-36"
                          frameClassNameOverride="bottom-navigation-36"
                          giftcardStateOutline="/img/vector-8.png"
                          giftcardStateOutlineClassName="bottom-navigation-42"
                          homeIconStateFilled="/img/vector-8.png"
                          homeIconStateFilledClassName="bottom-navigation-37"
                          mode="light"
                          profileOldPropertyFilledClassName="bottom-navigation-43"
                          profileOldPropertyOutline="/img/vector-8.png"
                          tradeStateFilledClassName="bottom-navigation-39"
                          tradeStateOutline="/img/vector-8.png"
                          walletStateFilledClassName="bottom-navigation-41"
                          walletStateOutline="/img/vector-8.png"
                        />
                        <HomeIndicatorWrapper
                          className="home-indicator-22"
                          homeIndicatorHomeIndicatorClassName="home-indicator-24"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-23"
                        />
                      </div>

                      <div className="status-bars-14">
                        <div className="statusbar-ios-20">
                          <div className="left-side-10">
                            <StatusbarsTime
                              className="statusbars-time-11"
                              darkMode={false}
                              time="9:41"
                              timeClassName="statusbars-time-12"
                              type="default"
                            />
                          </div>

                          <div className="right-side-9">
                            <img
                              className="icon-mobile-signal-9"
                              alt="Icon mobile signal"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="wifi-9"
                              alt="Wifi"
                              src="/img/vector-8.png"
                            />

                            <div className="statusbar-battery-7">
                              <img
                                className="outline-8"
                                alt="Outline"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="battery-end-8"
                                alt="Battery end"
                                src="/img/vector-8.png"
                              />

                              <div className="percentage-8">70</div>
                            </div>
                          </div>
                        </div>

                        <DynamicIsland
                          cameraClassName="dynamic-island-25"
                          className="dynamic-island-22"
                          facetimeCameraClassName="dynamic-island-24"
                          size="compact"
                          truedepthCameraClassName="dynamic-island-23"
                          type="default"
                        />
                      </div>

                      <div className="rectangle-42" />

                      <div className="bottom-sheet-3">
                        <div className="frame-219">
                          <div className="frame-198">
                            <div className="text-wrapper-167">Select Token</div>

                            <div className="frame-220">
                              <ImgWrapper
                                className="icons-34"
                                icons="/img/vector-8.png"
                              />
                            </div>
                          </div>

                          <div className="frame-221">
                            <div className="frame-222">
                              <div className="text-wrapper-168">Crypto</div>
                            </div>

                            <div className="frame-223">
                              <div className="text-wrapper-169">Fiat</div>
                            </div>
                          </div>

                          <div className="input-field-box-9">
                            <div className="frame-224">
                              <Search
                                className="search-4"
                                search="/img/search-1-2x.png"
                              />
                              <div className="text-wrapper-156">
                                Search by asset name
                              </div>
                            </div>

                            <div className="frame-225" />
                          </div>

                          <div className="frame-212">
                            <div className="frame-199">
                              <div className="icon-ethereum-5">
                                <div className="group-29">
                                  <img
                                    className="vector-67"
                                    alt="Vector"
                                    src="/img/vector-46.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-213">
                                <div className="text-wrapper-161">BTC</div>

                                <div className="text-wrapper-162">Bitcoin</div>
                              </div>
                            </div>

                            <div className="frame-199">
                              <img
                                className="icon-ethereum-5"
                                alt="Icon ethereum"
                                src="/img/icon-ethereum-cryptocurrency-5.png"
                              />

                              <div className="frame-213">
                                <div className="text-wrapper-161">ETH</div>

                                <div className="text-wrapper-162">Ethereum</div>
                              </div>
                            </div>

                            <div className="frame-199">
                              <div className="frame-226">
                                <img
                                  className="vector-68"
                                  alt="Vector"
                                  src="/img/vector-48-2x.png"
                                />
                              </div>

                              <div className="frame-213">
                                <div className="text-wrapper-161">SOL</div>

                                <div className="text-wrapper-162">Solana</div>
                              </div>
                            </div>

                            <div className="frame-199">
                              <div className="usdt-3">
                                <div className="group-30">
                                  <img
                                    className="vector-69"
                                    alt="Vector"
                                    src="/img/vector-50.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-213">
                                <div className="text-wrapper-161">USDT</div>

                                <div className="text-wrapper-162">
                                  USD Tether
                                </div>
                              </div>
                            </div>

                            <div className="frame-199">
                              <div className="frame-217">
                                <div className="overlap-group-32">
                                  <img
                                    className="vector-70"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />

                                  <img
                                    className="vector-71"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-213">
                                <div className="text-wrapper-161">USDC</div>

                                <div className="text-wrapper-162">USD Coin</div>
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

            <div className="frame-227">
              <p className="text-wrapper-170">
                Easily Buy Crypto with Local Fiat.
              </p>

              <p className="text-wrapper-171">
                Purchase USDT and other cryptocurrencies quickly and securely
                using your preferred local payment methods like bank transfers
                and mobile money.
              </p>
            </div>
          </div>

          <div className="frame-228">
            <div className="frame-229">
              <div className="group-31">
                <div className="overlap-18">
                  <img
                    className="rectangle-43"
                    alt="Rectangle"
                    src="/img/rectangle-1-2x.png"
                  />

                  <div className="giftcards-10">
                    <div className="overlap-group-33">
                      <div className="frame-230">
                        <div className="frame-231">
                          <div className="frame-232">
                            <div className="caret-left-4">
                              <img
                                className="vector-72"
                                alt="Vector"
                                src="/img/vector-8.png"
                              />
                            </div>
                          </div>

                          <div className="frame-233" />
                        </div>

                        <div className="frame-234">
                          <div className="frame-235">
                            <div className="frame-236">
                              <Logo
                                className="logo-41"
                                divClassName="logo-44"
                                fluentEmojiHighClassName="logo-42"
                                variant="brand"
                                vector="/img/vector-8.png"
                                vectorClassName="logo-43"
                              />
                              <p className="text-wrapper-172">
                                Swap assets easily with bramp.
                              </p>
                            </div>

                            <div className="frame-236">
                              <div className="input-field-box-10">
                                <div className="text-wrapper-173">Sell</div>

                                <div className="frame-204">
                                  <div className="frame-237">
                                    <div className="input-field-box-11">
                                      <div className="frame-238">
                                        <div className="div-4">
                                          <div className="group-32">
                                            <img
                                              className="vector-73"
                                              alt="Vector"
                                              src="/img/vector-56-2x.png"
                                            />
                                          </div>
                                        </div>

                                        <div className="text-wrapper-174">
                                          BTC
                                        </div>

                                        <CaretDown
                                          caretDown="/img/caretdown-61.png"
                                          className="design-component-instance-node-9"
                                        />
                                      </div>
                                    </div>

                                    <div className="frame-239">
                                      <Wallet
                                        className="design-component-instance-node-9"
                                        state="outline"
                                        stateOutline="/img/wallet-15.png"
                                      />
                                      <div className="frame-240">
                                        <div className="text-wrapper-175">
                                          0.00045 BTC
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-241">
                                    <div className="text-wrapper-176">0.00</div>

                                    <div className="text-wrapper-177">
                                      0.00 BTC
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="input-field-box-10">
                                <div className="text-wrapper-173">Buy</div>

                                <div className="frame-204">
                                  <div className="frame-237">
                                    <div className="input-field-box-11">
                                      <div className="frame-238">
                                        <img
                                          className="div-4"
                                          alt="Icon ethereum"
                                          src="/img/icon-ethereum-cryptocurrency-1.png"
                                        />

                                        <div className="text-wrapper-174">
                                          NGNB
                                        </div>

                                        <CaretDown
                                          caretDown="/img/caretdown-62.png"
                                          className="design-component-instance-node-9"
                                        />
                                      </div>
                                    </div>

                                    <div className="frame-239">
                                      <Wallet
                                        className="design-component-instance-node-9"
                                        state="outline"
                                        stateOutline="/img/wallet-16-2x.png"
                                      />
                                      <div className="frame-240">
                                        <div className="text-wrapper-175">
                                          845,333 NGNB
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="frame-241">
                                    <div className="text-wrapper-176">0.00</div>

                                    <div className="frame-242">
                                      <div className="hugeicons-dollar-3">
                                        <img
                                          className="vector-74"
                                          alt="Vector"
                                          src="/img/vector-57.png"
                                        />
                                      </div>

                                      <div className="text-wrapper-175">0</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="FAB-4">
                                <div className="div-4">
                                  <img
                                    className="vector-75"
                                    alt="Vector"
                                    src="/img/vector-58.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <ButtonMain
                            buttonText="Swap"
                            className="button-main-14"
                            color="primary"
                            frameClassName="button-main-15"
                            leftIcon={false}
                            rightIcon={false}
                            size="large"
                            state="disabled"
                          />
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <img
                              className="american-express-4"
                              alt="American express"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-178">
                              American Express
                            </div>
                          </div>

                          <div className="frame-244">
                            <div className="img-wrapper-5">
                              <img
                                className="apple-logo-4"
                                alt="Apple logo"
                                src="/img/apple-logo-transparent-free-png.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Apple Store</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <img
                              className="best-buy-4"
                              alt="Best buy"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-179">Best Buy</div>
                          </div>

                          <div className="frame-244">
                            <img
                              className="ebay-4"
                              alt="Ebay"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-179">Ebay</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <img
                              className="footlocker-4"
                              alt="Footlocker"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-179">Foot Locker</div>
                          </div>

                          <div className="frame-244">
                            <div className="img-wrapper-5">
                              <img
                                className="gamestop-4"
                                alt="Gamestop"
                                src="/img/vector-8.png"
                              />
                            </div>

                            <div className="text-wrapper-179">GameStop</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <img
                              className="googleplay-4"
                              alt="Googleplay"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-179">Google</div>
                          </div>

                          <div className="frame-244">
                            <img
                              className="homedepot-4"
                              alt="Homedepot"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-179">Home Depot</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-11">
                              <img
                                className="itunes-4"
                                alt="Itunes"
                                src="/img/itunes.png"
                              />
                            </div>

                            <div className="text-wrapper-179">iTunes</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-11">
                              <img
                                className="macys-logo-black-4"
                                alt="Macys logo black"
                                src="/img/macys-logo-black-transparent.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Macy’s</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="netflix-4"
                                alt="Netflix"
                                src="/img/netflix.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Netflix</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="nike-4"
                                alt="Nike"
                                src="/img/nike.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Nike</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="nordstrom-seeklogo-4"
                                alt="Nordstrom seeklogo"
                                src="/img/nordstrom-seeklogo.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Nordstorm</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="offgamers-4"
                                alt="Offgamers"
                                src="/img/offgamers.png"
                              />
                            </div>

                            <div className="text-wrapper-179">OffGamers</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="vanilla-4"
                                alt="Vanilla"
                                src="/img/vanilla.png"
                              />
                            </div>

                            <div className="text-wrapper-179">OneVanilla</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="playstation-logo-4"
                                alt="Playstation logo"
                                src="/img/playstation-logo-wine.png"
                              />
                            </div>

                            <div className="text-wrapper-179">PlayStation</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="razer-logo-4"
                                alt="Razer logo"
                                src="/img/razer-logo-transparent-png.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Razer</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="sephora-logo-png-4"
                                alt="Sephora logo png"
                                src="/img/sephora-logo-png-seeklogo-208666.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Sephora</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="steam-4"
                                alt="Steam"
                                src="/img/steam.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Steam</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="target-4"
                                alt="Target"
                                src="/img/target.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Target</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="element-visa-4"
                                alt="Element visa"
                                src="/img/857-visa.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Visa</div>
                          </div>

                          <div className="frame-244">
                            <div className="giftcards-12">
                              <img
                                className="walmart-logo-4"
                                alt="Walmart logo"
                                src="/img/walmart-logo-1.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Walmart</div>
                          </div>
                        </div>

                        <div className="frame-243">
                          <div className="frame-245">
                            <div className="giftcards-12">
                              <img
                                className="xbox-logo-4"
                                alt="Xbox logo"
                                src="/img/xbox-logo-1.png"
                              />
                            </div>

                            <div className="text-wrapper-179">Xbox</div>
                          </div>
                        </div>
                      </div>

                      <div className="frame-246">
                        <HomeIndicatorWrapper
                          className="home-indicator-25"
                          homeIndicatorHomeIndicatorClassName="home-indicator-27"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-26"
                        />
                      </div>
                    </div>

                    <div className="status-bars-15">
                      <div className="statusbar-ios-21">
                        <div className="left-side-11">
                          <StatusbarsTime
                            className="statusbars-time-13"
                            darkMode={false}
                            time="9:41"
                            timeClassName="statusbars-time-14"
                            type="default"
                          />
                        </div>

                        <div className="right-side-10">
                          <img
                            className="icon-mobile-signal-10"
                            alt="Icon mobile signal"
                            src="/img/vector-8.png"
                          />

                          <img
                            className="wifi-10"
                            alt="Wifi"
                            src="/img/vector-8.png"
                          />

                          <div className="statusbar-battery-8">
                            <img
                              className="outline-9"
                              alt="Outline"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="battery-end-9"
                              alt="Battery end"
                              src="/img/vector-8.png"
                            />

                            <div className="percentage-9">70</div>
                          </div>
                        </div>
                      </div>

                      <DynamicIsland
                        cameraClassName="dynamic-island-29"
                        className="dynamic-island-26"
                        facetimeCameraClassName="dynamic-island-28"
                        size="compact"
                        truedepthCameraClassName="dynamic-island-27"
                        type="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-227">
              <p className="text-wrapper-180">
                Convert Crypto to Fiat with Ease.
              </p>

              <p className="text-wrapper-171">
                Sell your crypto and receive fiat directly into your bank
                account or mobile wallet with transparent pricing.
              </p>
            </div>
          </div>

          <div className="frame-228">
            <div className="frame-247">
              <div className="group-33">
                <div className="overlap-19">
                  <img
                    className="rectangle-44"
                    alt="Rectangle"
                    src="/img/rectangle-2-2.png"
                  />

                  <div className="giftcards-13">
                    <div className="overlap-group-34">
                      <div className="frame-248">
                        <div className="frame-249">
                          <div className="frame-198">
                            <div className="text-wrapper-181">Giftcards</div>

                            <div className="frame-250">
                              <History
                                className="history-2"
                                history="/img/vector-8.png"
                              />
                              <div className="text-wrapper-182">History</div>
                            </div>
                          </div>

                          <div className="frame-251">
                            <div className="frame-252" />

                            <div className="frame-253" />

                            <div className="frame-253" />

                            <div className="frame-253" />

                            <div className="frame-253" />
                          </div>

                          <p className="text-wrapper-183">
                            Select a card to trade
                          </p>

                          <Input
                            className="input-7"
                            divClassName="input-10"
                            frameClassName="input-9"
                            frameClassNameOverride="input-11"
                            helper={false}
                            inputFieldBoxClassName="input-8"
                            label={false}
                            leftSampleCopy="Search for giftcards"
                            leftText={false}
                            override={
                              <Search
                                className="search-5"
                                search="/img/vector-8.png"
                              />
                            }
                            rightIcon={false}
                            rightSample={false}
                            rightText={false}
                            state="default"
                          />
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <img
                              className="adidas-2"
                              alt="Adidas"
                              src="/img/adidas.png"
                            />

                            <div className="text-wrapper-184">Adidas</div>
                          </div>

                          <div className="frame-255">
                            <img
                              className="amazon-gift-card-png-2"
                              alt="Amazon gift card png"
                              src="/img/amazon-gift-card-png.png"
                            />

                            <div className="text-wrapper-184">Amazon</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <img
                              className="american-express-5"
                              alt="American express"
                              src="/img/american-express-1-2x.png"
                            />

                            <div className="text-wrapper-185">
                              American Express
                            </div>
                          </div>

                          <div className="frame-255">
                            <div className="img-wrapper-6">
                              <img
                                className="apple-logo-5"
                                alt="Apple logo"
                                src="/img/apple-logo-transparent-free-png.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Apple Store</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <img
                              className="best-buy-5"
                              alt="Best buy"
                              src="/img/best-buy-1-1-2x.png"
                            />

                            <div className="text-wrapper-184">Best Buy</div>
                          </div>

                          <div className="frame-255">
                            <img
                              className="ebay-5"
                              alt="Ebay"
                              src="/img/best-buy-1-1-2x.png"
                            />

                            <div className="text-wrapper-184">Ebay</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <img
                              className="footlocker-5"
                              alt="Footlocker"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-184">Foot Locker</div>
                          </div>

                          <div className="frame-255">
                            <div className="img-wrapper-6">
                              <img
                                className="gamestop-5"
                                alt="Gamestop"
                                src="/img/best-buy-1-1-2x.png"
                              />
                            </div>

                            <div className="text-wrapper-184">GameStop</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <img
                              className="googleplay-5"
                              alt="Googleplay"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-184">Google</div>
                          </div>

                          <div className="frame-255">
                            <img
                              className="homedepot-5"
                              alt="Homedepot"
                              src="/img/vector-8.png"
                            />

                            <div className="text-wrapper-184">Home Depot</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-14">
                              <img
                                className="itunes-5"
                                alt="Itunes"
                                src="/img/itunes.png"
                              />
                            </div>

                            <div className="text-wrapper-184">iTunes</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-14">
                              <img
                                className="macys-logo-black-5"
                                alt="Macys logo black"
                                src="/img/macys-logo-black-transparent.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Macy’s</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="netflix-5"
                                alt="Netflix"
                                src="/img/netflix.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Netflix</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="nike-5"
                                alt="Nike"
                                src="/img/nike.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Nike</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="nordstrom-seeklogo-5"
                                alt="Nordstrom seeklogo"
                                src="/img/nordstrom-seeklogo.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Nordstorm</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="offgamers-5"
                                alt="Offgamers"
                                src="/img/offgamers.png"
                              />
                            </div>

                            <div className="text-wrapper-184">OffGamers</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="vanilla-5"
                                alt="Vanilla"
                                src="/img/vanilla.png"
                              />
                            </div>

                            <div className="text-wrapper-184">OneVanilla</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="playstation-logo-5"
                                alt="Playstation logo"
                                src="/img/playstation-logo-wine.png"
                              />
                            </div>

                            <div className="text-wrapper-184">PlayStation</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="razer-logo-5"
                                alt="Razer logo"
                                src="/img/razer-logo-transparent-png.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Razer</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="sephora-logo-png-5"
                                alt="Sephora logo png"
                                src="/img/sephora-logo-png-seeklogo-208666.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Sephora</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="steam-5"
                                alt="Steam"
                                src="/img/steam.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Steam</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="target-5"
                                alt="Target"
                                src="/img/target.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Target</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="element-visa-5"
                                alt="Element visa"
                                src="/img/857-visa.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Visa</div>
                          </div>

                          <div className="frame-255">
                            <div className="giftcards-15">
                              <img
                                className="walmart-logo-5"
                                alt="Walmart logo"
                                src="/img/walmart-logo-1.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Walmart</div>
                          </div>
                        </div>

                        <div className="frame-254">
                          <div className="frame-256">
                            <div className="giftcards-15">
                              <img
                                className="xbox-logo-5"
                                alt="Xbox logo"
                                src="/img/xbox-logo-1.png"
                              />
                            </div>

                            <div className="text-wrapper-184">Xbox</div>
                          </div>
                        </div>
                      </div>

                      <div className="frame-257">
                        <StateWalletWrapper
                          FABPropertyRampClassName="bottom-navigation-51"
                          FABRectangleClassName="bottom-navigation-53"
                          FABVector="/img/vector-8.png"
                          FABVectorClassName="bottom-navigation-52"
                          className="bottom-navigation-44"
                          divClassName="bottom-navigation-47"
                          divClassName1="bottom-navigation-47"
                          divClassName2="bottom-navigation-47"
                          divClassNameOverride="bottom-navigation-50"
                          frameClassName="bottom-navigation-45"
                          frameClassName1="bottom-navigation-45"
                          frameClassName2="bottom-navigation-45"
                          frameClassName3="bottom-navigation-45"
                          frameClassNameOverride="bottom-navigation-45"
                          giftcardClassName="bottom-navigation-48"
                          homeHome="/img/vector-8.png"
                          homeHomeClassName="bottom-navigation-46"
                          state="giftcards"
                          userPropertyClassName="bottom-navigation-55"
                          userPropertyUserlight="/img/vector-8.png"
                          vector="/img/vector-8.png"
                          vectorClassName="bottom-navigation-49"
                          walletStateFilledClassName="bottom-navigation-54"
                          walletStateOutline="/img/vector-8.png"
                        />
                        <HomeIndicatorWrapper
                          className="home-indicator-28"
                          homeIndicatorHomeIndicatorClassName="home-indicator-30"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-29"
                        />
                      </div>
                    </div>

                    <div className="status-bars-16">
                      <div className="statusbar-ios-22">
                        <div className="left-side-12">
                          <StatusbarsTime
                            className="statusbars-time-15"
                            darkMode={false}
                            time="9:41"
                            timeClassName="statusbars-time-16"
                            type="default"
                          />
                        </div>

                        <div className="right-side-11">
                          <img
                            className="icon-mobile-signal-11"
                            alt="Icon mobile signal"
                            src="/img/vector-8.png"
                          />

                          <img
                            className="wifi-11"
                            alt="Wifi"
                            src="/img/vector-8.png"
                          />

                          <div className="statusbar-battery-9">
                            <img
                              className="outline-10"
                              alt="Outline"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="battery-end-10"
                              alt="Battery end"
                              src="/img/vector-8.png"
                            />

                            <div className="percentage-10">70</div>
                          </div>
                        </div>
                      </div>

                      <DynamicIsland
                        cameraClassName="dynamic-island-33"
                        className="dynamic-island-30"
                        facetimeCameraClassName="dynamic-island-32"
                        size="compact"
                        truedepthCameraClassName="dynamic-island-31"
                        type="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-227">
              <p className="text-wrapper-186">
                Buy and Sell Gift Cards Instantly.
              </p>

              <p className="text-wrapper-171">
                Turn unused gift cards into crypto or fiat, or purchase popular
                gift cards using your digital assets or local currency.
              </p>
            </div>
          </div>

          <div className="frame-228">
            <div className="frame-258">
              <div className="group-34">
                <div className="overlap-20">
                  <div className="group-35">
                    <div className="overlap-21">
                      <img
                        className="rectangle-45"
                        alt="Rectangle"
                        src="/img/rectangle-3.png"
                      />

                      <div className="giftcards-16">
                        <div className="overlap-22">
                          <div className="frame-259">
                            <div className="frame-260">
                              <div className="frame-261">
                                <div className="caret-left-5">
                                  <img
                                    className="vector-76"
                                    alt="Vector"
                                    src="/img/vector-60.png"
                                  />
                                </div>
                              </div>

                              <div className="frame-262" />
                            </div>

                            <div className="frame-263">
                              <div className="frame-264">
                                <div className="frame-265">
                                  <Logo
                                    className="logo-45"
                                    divClassName="logo-48"
                                    fluentEmojiHighClassName="logo-46"
                                    variant="brand"
                                    vector="/img/vector-74-12.png"
                                    vectorClassName="logo-47"
                                  />
                                  <p className="text-wrapper-187">
                                    Swap assets easily with bramp.
                                  </p>
                                </div>

                                <div className="frame-265">
                                  <div className="input-field-box-12">
                                    <div className="text-wrapper-188">Sell</div>

                                    <div className="frame-204">
                                      <div className="frame-266">
                                        <div className="input-field-box-13">
                                          <div className="frame-267">
                                            <div className="icon-bitcoin-3">
                                              <div className="group-36">
                                                <div className="overlap-group-35">
                                                  <img
                                                    className="vector-77"
                                                    alt="Vector"
                                                    src="/img/vector-8.png"
                                                  />
                                                </div>
                                              </div>
                                            </div>

                                            <div className="text-wrapper-189">
                                              BTC
                                            </div>

                                            <CaretDown
                                              caretDown="/img/vector-8.png"
                                              className="caret-down-4"
                                            />
                                          </div>
                                        </div>

                                        <div className="frame-268">
                                          <Wallet
                                            className="wallet-4"
                                            state="outline"
                                            stateOutline="/img/vector-8.png"
                                          />
                                          <div className="frame-269">
                                            <div className="text-wrapper-190">
                                              0.00045 BTC
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="frame-270">
                                        <div className="text-wrapper-191">
                                          0.00
                                        </div>

                                        <div className="text-wrapper-192">
                                          0.00 BTC
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="input-field-box-12">
                                    <div className="text-wrapper-188">Buy</div>

                                    <div className="frame-204">
                                      <div className="frame-266">
                                        <div className="input-field-box-13">
                                          <div className="frame-267">
                                            <img
                                              className="icon-ethereum-6"
                                              alt="Icon ethereum"
                                              src="/img/vector-8.png"
                                            />

                                            <div className="text-wrapper-189">
                                              NGNB
                                            </div>

                                            <CaretDown
                                              caretDown="/img/vector-8.png"
                                              className="caret-down-5"
                                            />
                                          </div>
                                        </div>

                                        <div className="frame-268">
                                          <Wallet
                                            className="wallet-5"
                                            state="outline"
                                            stateOutline="/img/vector-8.png"
                                          />
                                          <div className="frame-269">
                                            <div className="text-wrapper-190">
                                              845,333 NGNB
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="frame-270">
                                        <div className="text-wrapper-191">
                                          0.00
                                        </div>

                                        <div className="frame-215">
                                          <div className="hugeicons-dollar-4">
                                            <img
                                              className="vector-78"
                                              alt="Vector"
                                              src="/img/vector-8.png"
                                            />
                                          </div>

                                          <div className="text-wrapper-190">
                                            0
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="FAB-5">
                                    <div className="iconamoon-swap-light-2">
                                      <img
                                        className="vector-79"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <ButtonMain
                                buttonText="Swap"
                                className="button-main-16"
                                color="primary"
                                frameClassName="button-main-17"
                                leftIcon={false}
                                rightIcon={false}
                                size="large"
                                state="disabled"
                              />
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <img
                                  className="american-express-6"
                                  alt="American express"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-193">
                                  American Express
                                </div>
                              </div>

                              <div className="frame-272">
                                <div className="img-wrapper-7">
                                  <img
                                    className="apple-logo-6"
                                    alt="Apple logo"
                                    src="/img/apple-logo-transparent-free-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">
                                  Apple Store
                                </div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <img
                                  className="best-buy-6"
                                  alt="Best buy"
                                  src="/img/best-buy-1-1-2x.png"
                                />

                                <div className="text-wrapper-194">Best Buy</div>
                              </div>

                              <div className="frame-272">
                                <img
                                  className="ebay-6"
                                  alt="Ebay"
                                  src="/img/best-buy-1-1-2x.png"
                                />

                                <div className="text-wrapper-194">Ebay</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <img
                                  className="footlocker-6"
                                  alt="Footlocker"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-194">
                                  Foot Locker
                                </div>
                              </div>

                              <div className="frame-272">
                                <div className="img-wrapper-7">
                                  <img
                                    className="gamestop-6"
                                    alt="Gamestop"
                                    src="/img/best-buy-1-1-2x.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">GameStop</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <img
                                  className="googleplay-6"
                                  alt="Googleplay"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-194">Google</div>
                              </div>

                              <div className="frame-272">
                                <img
                                  className="homedepot-6"
                                  alt="Homedepot"
                                  src="/img/vector-8.png"
                                />

                                <div className="text-wrapper-194">
                                  Home Depot
                                </div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-17">
                                  <img
                                    className="itunes-6"
                                    alt="Itunes"
                                    src="/img/itunes.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">iTunes</div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-17">
                                  <img
                                    className="macys-logo-black-6"
                                    alt="Macys logo black"
                                    src="/img/macys-logo-black-transparent.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Macy’s</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="netflix-6"
                                    alt="Netflix"
                                    src="/img/netflix.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Netflix</div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="nike-6"
                                    alt="Nike"
                                    src="/img/nike.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Nike</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="nordstrom-seeklogo-6"
                                    alt="Nordstrom seeklogo"
                                    src="/img/nordstrom-seeklogo.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">
                                  Nordstorm
                                </div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="offgamers-6"
                                    alt="Offgamers"
                                    src="/img/offgamers.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">
                                  OffGamers
                                </div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="vanilla-6"
                                    alt="Vanilla"
                                    src="/img/vanilla.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">
                                  OneVanilla
                                </div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="playstation-logo-6"
                                    alt="Playstation logo"
                                    src="/img/playstation-logo-wine.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">
                                  PlayStation
                                </div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="razer-logo-6"
                                    alt="Razer logo"
                                    src="/img/razer-logo-transparent-png.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Razer</div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="sephora-logo-png-6"
                                    alt="Sephora logo png"
                                    src="/img/sephora-logo-png-seeklogo-208666.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Sephora</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="steam-6"
                                    alt="Steam"
                                    src="/img/steam.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Steam</div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="target-6"
                                    alt="Target"
                                    src="/img/target.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Target</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="element-visa-6"
                                    alt="Element visa"
                                    src="/img/857-visa.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Visa</div>
                              </div>

                              <div className="frame-272">
                                <div className="giftcards-18">
                                  <img
                                    className="walmart-logo-6"
                                    alt="Walmart logo"
                                    src="/img/walmart-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Walmart</div>
                              </div>
                            </div>

                            <div className="frame-271">
                              <div className="frame-273">
                                <div className="giftcards-18">
                                  <img
                                    className="xbox-logo-6"
                                    alt="Xbox logo"
                                    src="/img/xbox-logo-1.png"
                                  />
                                </div>

                                <div className="text-wrapper-194">Xbox</div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-274">
                            <HomeIndicatorWrapper
                              className="home-indicator-31"
                              homeIndicatorHomeIndicatorClassName="home-indicator-33"
                              homeIndicatorThemeLightIphoneClassName="home-indicator-32"
                            />
                          </div>
                        </div>

                        <div className="status-bars-17">
                          <div className="statusbar-ios-23">
                            <div className="left-side-13">
                              <StatusbarsTime
                                className="statusbars-time-17"
                                darkMode={false}
                                time="9:41"
                                timeClassName="statusbars-time-18"
                                type="default"
                              />
                            </div>

                            <div className="right-side-12">
                              <img
                                className="icon-mobile-signal-12"
                                alt="Icon mobile signal"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="wifi-12"
                                alt="Wifi"
                                src="/img/vector-8.png"
                              />

                              <div className="statusbar-battery-10">
                                <img
                                  className="outline-11"
                                  alt="Outline"
                                  src="/img/vector-8.png"
                                />

                                <img
                                  className="battery-end-11"
                                  alt="Battery end"
                                  src="/img/vector-8.png"
                                />

                                <div className="percentage-11">70</div>
                              </div>
                            </div>
                          </div>

                          <DynamicIsland
                            cameraClassName="dynamic-island-37"
                            className="dynamic-island-34"
                            facetimeCameraClassName="dynamic-island-36"
                            size="compact"
                            truedepthCameraClassName="dynamic-island-35"
                            type="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wallet-6">
                    <div className="overlap-23">
                      <div className="frame-275">
                        <div className="frame-198">
                          <div className="frame-276">
                            <img
                              className="avatar-image-5"
                              alt="Avatar image"
                              src="/img/avatar-image-1-2x.png"
                            />

                            <div className="frame-193">
                              <p className="hello-adebayo-4">
                                <span className="text-wrapper-195">Hello,</span>

                                <span className="text-wrapper-151">&nbsp;</span>

                                <span className="text-wrapper-152">
                                  Adebayo
                                </span>
                              </p>

                              <div className="text-wrapper-196">@adeby78</div>
                            </div>
                          </div>

                          <Icons
                            className="icons-35"
                            icons="/img/icons-22-2x.png"
                          />
                        </div>

                        <div className="frame-277">
                          <div className="rectangle-46" />

                          <div className="frame-278">
                            <div className="frame-276">
                              <div className="text-wrapper-197">
                                Total Portfolio Balance
                              </div>

                              <See
                                className="see-4"
                                property1="view"
                                propertyView="/img/see-1-2x.png"
                              />
                            </div>

                            <div className="frame-279">
                              <img
                                className="vector-80"
                                alt="Vector"
                                src="/img/vector-65.png"
                              />

                              <div className="text-wrapper-198">325,000.00</div>
                            </div>
                          </div>

                          <img
                            className="cryptowallets-4"
                            alt="Cryptowallets"
                            src="/img/cryptowallets-showing.png"
                          />
                        </div>

                        <div className="frame-265">
                          <div className="frame-198">
                            <div className="text-wrapper-199">Quick Links</div>

                            <div className="frame-279">
                              <div className="text-wrapper-200">View more</div>

                              <CaretRightRegular
                                caretRightRegular="/img/vector-8.png"
                                className="caret-right-regular-5"
                              />
                            </div>
                          </div>

                          <div className="frame-204">
                            <div className="frame-280">
                              <div className="frame-281">
                                <Deposit
                                  className="deposit-5"
                                  deposit="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-192">Deposit</div>
                            </div>

                            <div className="frame-280">
                              <div className="frame-282">
                                <div className="guidance-send-4">
                                  <img
                                    className="vector-81"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />
                                </div>
                              </div>

                              <div className="text-wrapper-192">Transfer</div>
                            </div>

                            <div className="frame-280">
                              <div className="frame-283">
                                <Markets
                                  className="markets-3"
                                  property1="coins-light"
                                  propertyCoins="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-192">Swap</div>
                            </div>

                            <div className="frame-280">
                              <div className="frame-283">
                                <Utilities
                                  className="utilities-5"
                                  utilities="/img/vector-8.png"
                                />
                              </div>

                              <div className="text-wrapper-192">Utilities</div>
                            </div>
                          </div>
                        </div>

                        <div className="frame-284">
                          <div className="frame-204">
                            <div className="frame-285">
                              <div className="frame-286">
                                <div className="text-wrapper-201">
                                  Account Setup: 40% complete
                                </div>

                                <p className="text-wrapper-202">
                                  Complete your KYC to activate your account
                                </p>
                              </div>
                            </div>

                            <CaretRightRegular
                              caretRightRegular="/img/vector-8.png"
                              className="caret-right-regular-6"
                            />
                          </div>

                          <div className="frame-287">
                            <div className="frame-288" />
                          </div>
                        </div>

                        <div className="frame-289">
                          <div className="frame-290">
                            <div className="frame-291">
                              <div className="customer-information-4">
                                <div className="text-wrapper-203">
                                  All Assets
                                </div>
                              </div>

                              <div className="overview-4">
                                <div className="text-wrapper-190">Crypto</div>
                              </div>

                              <div className="overview-4">
                                <div className="text-wrapper-190">Fiat</div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-292">
                            <div className="frame-204">
                              <div className="frame-276">
                                <div className="icon-bitcoin-4">
                                  <div className="group-37">
                                    <div className="overlap-group-36">
                                      <img
                                        className="vector-82"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-293">
                                  <div className="text-wrapper-204">
                                    Bitcoin
                                  </div>

                                  <div className="text-wrapper-205">BTC</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-36"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">
                                    103,058.64
                                  </div>
                                </div>

                                <div className="frame-279">
                                  <IconPrintWrapper
                                    className="icons-37"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-207">4.65%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-294">
                              <div className="frame-276">
                                <img
                                  className="icon-ethereum-7"
                                  alt="Icon ethereum"
                                  src="/img/vector-8.png"
                                />

                                <div className="frame-293">
                                  <div className="text-wrapper-204">
                                    Ethereum
                                  </div>

                                  <div className="text-wrapper-205">ETH</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-38"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">2,562</div>
                                </div>

                                <div className="frame-279">
                                  <IconPrintWrapper
                                    className="icons-39"
                                    icon="increase"
                                    iconIncrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-207">0.5%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-276">
                                <img
                                  className="icon-ethereum-8"
                                  alt="Icon ethereum"
                                  src="/img/vector-8.png"
                                />

                                <div className="frame-293">
                                  <div className="text-wrapper-204">Naira</div>

                                  <div className="text-wrapper-205">NGNB</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <CurrencyNgn
                                    className="currency-ngn-4"
                                    currencyNgn="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">1,600</div>
                                </div>

                                <div className="frame-279">
                                  <div className="text-wrapper-208">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-204">
                              <div className="frame-276">
                                <div className="frame-295">
                                  <div className="overlap-group-37">
                                    <img
                                      className="vector-83"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-293">
                                  <div className="text-wrapper-204">Solana</div>

                                  <div className="text-wrapper-205">SOL</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-40"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">167.40</div>
                                </div>

                                <div className="frame-279">
                                  <IconPrintWrapper
                                    className="icons-41"
                                    icon="decrease"
                                    iconDecrease="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-209">0.94%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-294">
                              <div className="frame-276">
                                <div className="usdt-4">
                                  <div className="group-38">
                                    <div className="overlap-group-38">
                                      <img
                                        className="vector-84"
                                        alt="Vector"
                                        src="/img/vector-8.png"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="frame-293">
                                  <div className="text-wrapper-204">
                                    USD Tether
                                  </div>

                                  <div className="text-wrapper-205">USDT</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-42"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">1</div>
                                </div>

                                <div className="frame-279">
                                  <div className="text-wrapper-208">0%</div>
                                </div>
                              </div>
                            </div>

                            <div className="frame-294">
                              <div className="frame-276">
                                <div className="frame-296">
                                  <img
                                    className="vector-85"
                                    alt="Vector"
                                    src="/img/vector-8.png"
                                  />

                                  <div className="overlap-group-39">
                                    <img
                                      className="vector-86"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />

                                    <img
                                      className="vector-87"
                                      alt="Vector"
                                      src="/img/vector-8.png"
                                    />
                                  </div>
                                </div>

                                <div className="frame-293">
                                  <div className="text-wrapper-204">
                                    USD Coin
                                  </div>

                                  <div className="text-wrapper-205">USDC</div>
                                </div>
                              </div>

                              <div className="frame-270">
                                <div className="frame-215">
                                  <IconsWrapper
                                    className="icons-43"
                                    icons="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-206">1</div>
                                </div>

                                <div className="frame-279">
                                  <div className="text-wrapper-208">0%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="frame-297">
                        <StateWalletWrapper
                          FABPropertyRampClassName="bottom-navigation-63"
                          FABRectangleClassName="bottom-navigation-65"
                          FABVector="/img/vector-8.png"
                          FABVectorClassName="bottom-navigation-64"
                          className="bottom-navigation-56"
                          divClassName="bottom-navigation-59"
                          divClassName1="bottom-navigation-67"
                          divClassName2="bottom-navigation-67"
                          divClassNameOverride="bottom-navigation-62"
                          frameClassName="bottom-navigation-57"
                          frameClassName1="bottom-navigation-57"
                          frameClassName2="bottom-navigation-57"
                          frameClassName3="bottom-navigation-57"
                          frameClassNameOverride="bottom-navigation-57"
                          giftcardClassName="bottom-navigation-60"
                          homeHome="/img/vector-8.png"
                          homeHomeClassName="bottom-navigation-58"
                          img="/img/vector-8.png"
                          state="wallet"
                          userPropertyClassName="bottom-navigation-68"
                          userPropertyUserlight="/img/vector-8.png"
                          vectorClassName="bottom-navigation-61"
                          walletStateFilledClassName="bottom-navigation-66"
                          walletStateOutline="/img/vector-8.png"
                        />
                        <HomeIndicatorWrapper
                          className="home-indicator-31"
                          homeIndicatorHomeIndicatorClassName="home-indicator-33"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-32"
                        />
                      </div>
                    </div>

                    <div className="status-bars-18">
                      <div className="statusbar-ios-24">
                        <div className="left-side-14">
                          <StatusbarsTime
                            className="statusbars-time-17"
                            darkMode={false}
                            time="9:41"
                            timeClassName="statusbars-time-18"
                            type="default"
                          />
                        </div>

                        <div className="right-side-13">
                          <img
                            className="icon-mobile-signal-13"
                            alt="Icon mobile signal"
                            src="/img/vector-8.png"
                          />

                          <img
                            className="wifi-13"
                            alt="Wifi"
                            src="/img/vector-8.png"
                          />

                          <div className="statusbar-battery-10">
                            <img
                              className="outline-12"
                              alt="Outline"
                              src="/img/vector-8.png"
                            />

                            <img
                              className="battery-end-12"
                              alt="Battery end"
                              src="/img/vector-8.png"
                            />

                            <div className="percentage-11">70</div>
                          </div>
                        </div>
                      </div>

                      <DynamicIsland
                        cameraClassName="dynamic-island-37"
                        className="dynamic-island-38"
                        facetimeCameraClassName="dynamic-island-36"
                        size="compact"
                        truedepthCameraClassName="dynamic-island-35"
                        type="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-227">
              <div className="text-wrapper-210">
                Secure and Reliable Wallet.
              </div>

              <p className="text-wrapper-171">
                Safely store and manage your digital assets with our trusted
                wallet infrastructure.
              </p>
            </div>
          </div>

          <div className="frame-298">
            <Logo
              className="logo-49"
              fluentEmojiHighClassName="logo-38"
              showText={false}
              variant="brand"
              vector="/img/vector-74-14-2x.png"
              vectorClassName="logo-39"
            />
            <div className="frame-299">
              <div className="text-wrapper-211">
                Experience Seamless Transactions.
              </div>

              <p className="text-wrapper-171">
                Enjoy a fast, intuitive, and hassle-free platform designed for
                users of all technical levels.
              </p>
            </div>

            <Btn
              buttonMainClassName="btn-11"
              className="btn-10"
              divClassNameOverride="btn-12"
              hasDiv={false}
              property1="default"
              text1="Get Started"
              visible={false}
            />
          </div>
        </div>
      </div>

      <div className="features-5">
        <div className="frame-300">
          <div className="frame-192">
            <div className="frame-299">
              <div className="text-wrapper-212">Start in Minutes</div>

              <div className="frame-299">
                <p className="text-wrapper-213">
                  Create Your Bramp Account
                  <br />
                  Fast, Easy, and Secure
                </p>

                <p className="text-wrapper-214">
                  Join Bramp and get instant access to gift card and crypto
                  trading. We’ve made onboarding smooth so you can start trading
                  without delays.
                </p>
              </div>
            </div>

            <div className="frame-301">
              <div className="frame-302">
                <div className="frame-303">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Quick Sign Up</div>
              </div>

              <div className="frame-302">
                <div className="frame-303">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Personal Dashboard</div>
              </div>

              <div className="frame-302">
                <div className="frame-303">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Built for You</div>
              </div>
            </div>
          </div>

          <div className="frame-304">
            <div className="group-39">
              <div className="overlap-group-40">
                <img
                  className="rectangle-47"
                  alt="Rectangle"
                  src="/img/image.png"
                />

                <div className="onboarding-III-2">
                  <div className="status-bars-19">
                    <div className="statusbar-ios-25">
                      <div className="left-side-15">
                        <StatusbarsTime
                          className="statusbars-time-19"
                          darkMode={false}
                          time="9:41"
                          timeClassName="statusbars-time-20"
                          type="default"
                        />
                      </div>

                      <div className="right-side-14">
                        <img
                          className="icon-mobile-signal-14"
                          alt="Icon mobile signal"
                          src="/img/vector-8.png"
                        />

                        <img
                          className="wifi-14"
                          alt="Wifi"
                          src="/img/vector-8.png"
                        />

                        <div className="statusbar-battery-11">
                          <img
                            className="outline-13"
                            alt="Outline"
                            src="/img/vector-8.png"
                          />

                          <img
                            className="battery-end-13"
                            alt="Battery end"
                            src="/img/vector-8.png"
                          />

                          <div className="percentage-12">70</div>
                        </div>
                      </div>
                    </div>

                    <DynamicIsland
                      cameraClassName="dynamic-island-42"
                      className="dynamic-island-39"
                      facetimeCameraClassName="dynamic-island-41"
                      size="compact"
                      truedepthCameraClassName="dynamic-island-40"
                      type="default"
                    />
                  </div>

                  <div className="frame-305">
                    <Logo
                      className="logo-50"
                      divClassName="logo-53"
                      fluentEmojiHighClassName="logo-51"
                      variant="brand"
                      vector="/img/vector-8.png"
                      vectorClassName="logo-52"
                    />
                    <img
                      className="treasure-chest-2"
                      alt="Treasure chest"
                      src="/img/treasure-chest-2x.png"
                    />

                    <div className="frame-306">
                      <div className="frame-307" />

                      <div className="frame-307" />

                      <div className="frame-308" />
                    </div>

                    <div className="frame-309">
                      <div className="frame-310">
                        <div className="text-wrapper-215">
                          Your Secure Crypto Wallet
                        </div>

                        <p className="text-wrapper-216">
                          Deposit, withdraw, and manage crypto with confidence
                        </p>
                      </div>

                      <div className="frame-311">
                        <ButtonMain
                          buttonText="Sign Up"
                          className="button-main-18"
                          color="primary"
                          frameClassName="button-main-19"
                          leftIcon={false}
                          rightIcon={false}
                          size="large"
                          state="default"
                        />
                        <ButtonMain
                          buttonText="Log In"
                          className="button-main-20"
                          color="secondary"
                          frameClassName="button-main-21"
                          leftIcon={false}
                          rightIcon={false}
                          size="large"
                          state="outline"
                        />
                      </div>
                    </div>
                  </div>

                  <HomeIndicatorWrapper
                    className="home-indicator-34"
                    homeIndicatorHomeIndicatorClassName="home-indicator-36"
                    homeIndicatorThemeLightIphoneClassName="home-indicator-35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-300">
          <div className="frame-192">
            <div className="frame-299">
              <div className="text-wrapper-217">Add Funds Easily</div>

              <div className="frame-299">
                <p className="text-wrapper-213">
                  Top Up Your Wallet with Crypto
                  <br />
                  Safely and Instantly
                </p>

                <p className="text-wrapper-214">
                  Funding your Bramp wallet is simple. Choose your preferred
                  token, select the right network, and deposit with confidence
                  using your unique address.
                </p>
              </div>
            </div>

            <div className="frame-301">
              <div className="frame-302">
                <div className="frame-312">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Multiple Networks</div>
              </div>

              <div className="frame-302">
                <div className="frame-312">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <p className="text-wrapper-148">QR Code or Manual Copy</p>
              </div>

              <div className="frame-302">
                <div className="frame-312">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Real-Time Confirmation</div>
              </div>
            </div>
          </div>

          <div className="frame-313">
            <div className="group-40">
              <div className="overlap-24">
                <img
                  className="rectangle-48"
                  alt="Rectangle"
                  src="/img/rectangle-6-2.png"
                />

                <div className="deposit-crypto-II-2">
                  <div className="overlap-group-41">
                    <div className="hero-section-3">
                      <div className="bottom-sheet-4">
                        <img
                          className="code-2"
                          alt="Code"
                          src="/img/code-2x.png"
                        />
                      </div>
                    </div>

                    <StatusBars
                      className="status-bars-20"
                      device="iphone-15"
                      dynamicIslandCameraClassName="status-bars-22"
                      dynamicIslandFacetimeCameraClassName="status-bars-23"
                      dynamicIslandSizeCompactTypeClassName="status-bars-24"
                      dynamicIslandTruedepthCameraClassName="status-bars-21"
                      override={
                        <ThemeLightTrue
                          className="statusbar-ios-30"
                          iconMobileSignal="/img/vector-8.png"
                          iconMobileSignalClassName="statusbar-ios-35"
                          leftSideClassName="statusbar-ios-26"
                          rightSideClassName="statusbar-ios-28"
                          statusbarBatteryBatteryEnd="/img/vector-8.png"
                          statusbarBatteryBatteryEndClassName="statusbar-ios-32"
                          statusbarBatteryDarkModeFalseClassName="statusbar-ios-29"
                          statusbarBatteryExclude="/img/vector-8.png"
                          statusbarBatteryOverlapGroupClassName="statusbar-ios-33"
                          statusbarsTimeDarkModeFalseTypeClassName="statusbar-ios-27"
                          statusbarsTimeTimeClassName="statusbar-ios-31"
                          wifi="/img/wifi-12.png"
                          wifiClassName="statusbar-ios-34"
                        />
                      }
                    />
                    <div className="frame-314">
                      <div className="frame-315">
                        <div className="frame-198">
                          <div className="text-wrapper-218">
                            Deposit Bitcoin
                          </div>

                          <div className="frame-316">
                            <ImgWrapper
                              className="icons-44"
                              icons="/img/vector-8.png"
                            />
                          </div>
                        </div>

                        <div className="frame-317">
                          <div className="frame-198">
                            <div className="text-wrapper-219">
                              Minimum Deposit
                            </div>

                            <div className="text-wrapper-220">0.00001BTC</div>
                          </div>

                          <div className="frame-198">
                            <div className="text-wrapper-219">Network</div>

                            <div className="text-wrapper-220">BSC (BEP20)</div>
                          </div>

                          <div className="frame-318">
                            <div className="text-wrapper-219">
                              Wallet Address
                            </div>

                            <div className="input-field-box-14">
                              <div className="text-wrapper-221">
                                1A1zP...mv7vfNa
                              </div>

                              <div className="frame-319">
                                <div className="frame-320">
                                  <EscrowIcons
                                    className="escrow-icons-2"
                                    icon="copy"
                                    iconCopy="/img/vector-8.png"
                                  />
                                  <div className="text-wrapper-222">Copy</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="frame-321">
                          <ButtonMain
                            buttonText="Save as Image"
                            className="button-main-22"
                            color="primary"
                            frameClassName="button-main-23"
                            leftIcon={false}
                            rightIcon={false}
                            size="large"
                            state="outline"
                          />
                          <ButtonMain
                            buttonText="Share Address"
                            className="button-main-24"
                            color="primary"
                            frameClassName="button-main-23"
                            leftIcon={false}
                            rightIcon={false}
                            size="large"
                            state="default"
                          />
                        </div>
                      </div>

                      <div className="frame-322">
                        <HomeIndicatorWrapper
                          className="home-indicator-37"
                          homeIndicatorHomeIndicatorClassName="home-indicator-39"
                          homeIndicatorThemeLightIphoneClassName="home-indicator-38"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-300">
          <div className="frame-192">
            <div className="frame-299">
              <div className="text-wrapper-223">Peer-to-Peer Done Right</div>

              <div className="frame-299">
                <p className="text-wrapper-213">
                  Easily Find the Right People to Trade With
                </p>

                <p className="text-wrapper-214">
                  Bramp helps you connect with verified users to trade safely.
                  Whether you’re selling a gift card or receiving crypto, our
                  smart search tools make it simple.
                </p>
              </div>
            </div>

            <div className="frame-301">
              <div className="frame-302">
                <div className="frame-323">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Search by Username</div>
              </div>

              <div className="frame-302">
                <div className="frame-323">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Trade assets in minutes</div>
              </div>

              <div className="frame-302">
                <div className="frame-323">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Secure Trade Records</div>
              </div>
            </div>
          </div>

          <div className="frame-313">
            <div className="group-41">
              <div className="overlap-25">
                <img
                  className="rectangle-49"
                  alt="Rectangle"
                  src="/img/rectangle-7-2.png"
                />

                <div className="transfer-crypto-IV-2">
                  <div className="frame-324">
                    <div className="frame-325">
                      <div className="input-field-box-15">
                        <div className="frame-326">
                          <Search
                            className="search-6"
                            search="/img/search-3.png"
                          />
                          <div className="text-wrapper-224">ad</div>
                        </div>

                        <div className="frame-327">
                          <ImgWrapper
                            className="icons-45"
                            icons="/img/icons-4.png"
                          />
                        </div>
                      </div>

                      <div className="text-wrapper-225">Cancel</div>
                    </div>

                    <div className="frame-328">
                      <div className="frame-329">
                        <img
                          className="avatar-image-6"
                          alt="Avatar image"
                          src="/img/avatar-image-2-2x.png"
                        />

                        <div className="frame-330">
                          <div className="text-wrapper-224">
                            Abdulaziz Rakeem
                          </div>

                          <div className="text-wrapper-226">@adeby78</div>
                        </div>
                      </div>

                      <div className="frame-329">
                        <img
                          className="avatar-image-6"
                          alt="Avatar image"
                          src="/img/avatar-image-3-2x.png"
                        />

                        <div className="frame-330">
                          <div className="text-wrapper-224">Adnez Brampton</div>

                          <div className="text-wrapper-226">@adddnez</div>
                        </div>
                      </div>

                      <div className="frame-329">
                        <img
                          className="avatar-image-6"
                          alt="Avatar image"
                          src="/img/avatar-image-4-2x.png"
                        />

                        <div className="frame-330">
                          <div className="text-wrapper-224">Hanna Admid</div>

                          <div className="text-wrapper-226">@hunad</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="frame-331">
                    <HomeIndicatorWrapper
                      className="home-indicator-40"
                      homeIndicatorHomeIndicatorClassName="home-indicator-42"
                      homeIndicatorThemeLightIphoneClassName="home-indicator-41"
                    />
                  </div>

                  <StatusBars
                    className="status-bars-25"
                    device="iphone-15"
                    dynamicIslandCameraClassName="status-bars-27"
                    dynamicIslandFacetimeCameraClassName="status-bars-28"
                    dynamicIslandSizeCompactTypeClassName="status-bars-29"
                    dynamicIslandTruedepthCameraClassName="status-bars-26"
                    override={
                      <ThemeLightFalse
                        className="statusbar-ios-36"
                        iconMobileSignal="/img/icon-mobile-signal-13.png"
                        iconMobileSignalClassName="statusbar-ios-41"
                        leftSideClassName="statusbar-ios-37"
                        rightSideClassName="statusbar-ios-40"
                        statusbarBatteryBatteryEnd="/img/battery-end-23-2x.png"
                        statusbarBatteryBatteryEndClassName="statusbar-ios-43"
                        statusbarBatteryDarkModeFalseClassName="statusbar-ios-46"
                        statusbarBatteryOutline="/img/outline-18-2x.png"
                        statusbarBatteryOutlineClassName="statusbar-ios-47"
                        statusbarBatteryOverlapGroupClassName="statusbar-ios-44"
                        statusbarBatteryPercentageClassName="statusbar-ios-45"
                        statusbarsTimeDarkModeFalseTypeClassName="statusbar-ios-38"
                        statusbarsTimeTimeClassName="statusbar-ios-39"
                        wifi="/img/wifi-13.png"
                        wifiClassName="statusbar-ios-42"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-300">
          <div className="frame-192">
            <div className="frame-299">
              <div className="text-wrapper-227">Do More with Bramp</div>

              <div className="frame-299">
                <p className="text-wrapper-213">
                  Use Your Balance to Pay Bills Instantly
                </p>

                <p className="text-wrapper-214">
                  Bramp isn’t just for trading , you can use your crypto
                  earnings to pay for everyday needs like airtime, electricity,
                  and internet, straight from your wallet.
                </p>
              </div>
            </div>

            <div className="frame-301">
              <div className="frame-302">
                <div className="frame-332">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Airtime Top-Up</div>
              </div>

              <div className="frame-302">
                <div className="frame-332">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Electricity Payments</div>
              </div>

              <div className="frame-302">
                <div className="frame-332">
                  <SubwayTick
                    className="subway-tick-2"
                    subwayTick="/img/subway-tick-1.png"
                  />
                </div>

                <div className="text-wrapper-148">Internet &amp; Data</div>
              </div>
            </div>
          </div>

          <div className="frame-313">
            <div className="group-42">
              <div className="overlap-group-42">
                <img
                  className="rectangle-50"
                  alt="Rectangle"
                  src="/img/rectangle-8.png"
                />

                <div className="utilities-6">
                  <div className="frame-333">
                    <div className="frame-334">
                      <div className="frame-198">
                        <div className="frame-335">
                          <div className="caret-left-6">
                            <img
                              className="vector-88"
                              alt="Vector"
                              src="/img/vector-8.png"
                            />
                          </div>
                        </div>

                        <div className="text-wrapper-228">Utilities</div>

                        <div className="frame-336" />
                      </div>

                      <div className="frame-337">
                        <div className="text-wrapper-229">Pay Bills</div>

                        <div className="frame-338">
                          <div className="frame-339">
                            <div className="frame-340">
                              <Airtime
                                airtime="/img/airtime-1-2x.png"
                                className="design-component-instance-node-10"
                              />
                            </div>

                            <div className="text-wrapper-230">Airtime</div>
                          </div>

                          <div className="frame-341">
                            <div className="frame-340">
                              <Data
                                className="design-component-instance-node-10"
                                data="/img/data-1.png"
                              />
                            </div>

                            <div className="text-wrapper-230">Data</div>
                          </div>
                        </div>

                        <div className="frame-338">
                          <div className="frame-342">
                            <div className="frame-340">
                              <Betting
                                betting="/img/betting-1.png"
                                className="design-component-instance-node-10"
                              />
                            </div>

                            <div className="text-wrapper-230">Betting</div>
                          </div>

                          <div className="frame-343">
                            <div className="frame-340">
                              <Electricity
                                className="design-component-instance-node-10"
                                electricity="/img/electricity-1.png"
                              />
                            </div>

                            <div className="text-wrapper-230">Electricity</div>
                          </div>
                        </div>

                        <div className="frame-338">
                          <div className="frame-344">
                            <div className="frame-340">
                              <Cable
                                cable="/img/cable-1-2x.png"
                                className="design-component-instance-node-10"
                              />
                            </div>

                            <div className="text-wrapper-230">Cable</div>
                          </div>

                          <div className="frame-345" />
                        </div>
                      </div>
                    </div>

                    <div className="frame-346">
                      <div className="frame-198">
                        <div className="text-wrapper-229">
                          Recent Transactions
                        </div>

                        <div className="frame-347">
                          <div className="text-wrapper-231">View All</div>

                          <CaretRight
                            caretRight="/img/vector-8.png"
                            className="caret-right-2"
                          />
                        </div>
                      </div>

                      <div className="frame-337">
                        <div className="frame-348">
                          <div className="frame-349">
                            <div className="text-wrapper-219">Airtime</div>

                            <div className="text-wrapper-232">Successful</div>
                          </div>

                          <div className="frame-350">
                            <div className="text-wrapper-219">-5000 NGNB</div>

                            <div className="jan-pm">
                              Jan 16, 2025&nbsp;&nbsp;12:30pm
                            </div>
                          </div>
                        </div>

                        <div className="frame-348">
                          <div className="frame-349">
                            <div className="text-wrapper-219">Electricity</div>

                            <div className="text-wrapper-232">Successful</div>
                          </div>

                          <div className="frame-350">
                            <div className="text-wrapper-219">-3,000 NGNB</div>

                            <div className="jan-pm">
                              Jan 5, 2025&nbsp;&nbsp;9:30pm
                            </div>
                          </div>
                        </div>

                        <div className="frame-351">
                          <div className="frame-349">
                            <div className="text-wrapper-219">Data</div>

                            <div className="text-wrapper-233">Failed</div>
                          </div>

                          <div className="frame-350">
                            <div className="text-wrapper-219">-6,600 NGNB</div>

                            <div className="jan-pm">
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
      </div>

      <div className="FA-qs-3">
        <div className="frame-352">
          <div className="text-wrapper-234">Frequently Asked Questions</div>
        </div>

        <div className="frame-353">
          <FaQs
            FAQHeader="How do I get started with Bramp?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="What cryptocurrencies can I buy and sell?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="How long do crypto transactions take?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="Is my wallet secure?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="Why do I need to complete KYC?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="What documents are required for KYC?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
          <FaQs
            FAQHeader="How can I get help if I have a problem?"
            className="design-component-instance-node-11"
            frameClassName="FA-qs-instance"
            stateProp="closed"
          />
        </div>
      </div>

      <div className="features-6">
        <div className="frame-354">
          <div className="frame-355">
            <Logo
              className="logo-54"
              fluentEmojiHighClassName="logo-55"
              showText={false}
              variant="black"
              vector="/img/vector-74-16-2x.png"
              vectorClassName="logo-56"
            />
            <div className="frame-356">
              <p className="text-wrapper-235">
                Ready to Experience the Future of Trading?
              </p>

              <p className="text-wrapper-236">
                Join thousands already trading smarter
              </p>
            </div>

            <Btn
              buttonMainClassName="btn-14"
              className="btn-13"
              divClassNameOverride="btn-12"
              hasDiv={false}
              property1="default"
              text1="Get Started"
              visible={false}
            />
          </div>

          <div className="coin-cardano-2">
            <div className="overlap-26">
              <div className="overlap-group-wrapper-2">
                <div className="overlap-group-43">
                  <img
                    className="img-11"
                    alt="Coin mask"
                    src="/img/coin-mask-9.png"
                  />
                </div>
              </div>

              <div className="overlap-group-wrapper-2">
                <div className="overlap-27">
                  <img
                    className="img-11"
                    alt="Icon mask"
                    src="/img/icon-mask-9.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <CoinBitcoin
            className="coin-bitcoin-instance"
            coinMask="/img/coin-mask-7.png"
            coinMaskClassName="coin-bitcoin-cam2"
            iconMask="/img/icon-mask-7.png"
            iconMaskClassName="coin-bitcoin-cam2"
          />
          <div className="coin-stellar-2">
            <div className="overlap-26">
              <div className="overlap-group-wrapper-2">
                <div className="overlap-group-44">
                  <img
                    className="img-12"
                    alt="Coin mask"
                    src="/img/vector-8.png"
                  />
                </div>
              </div>

              <div className="overlap-group-wrapper-2">
                <div className="overlap-28">
                  <img
                    className="img-12"
                    alt="Icon mask"
                    src="/img/vector-8.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="coin-binance-cam">
            <div className="overlap-26">
              <div className="overlap-group-wrapper-2">
                <div className="overlap-group-45">
                  <img
                    className="coin-mask-2"
                    alt="Coin mask"
                    src="/img/coin-mask-3-2x.png"
                  />
                </div>
              </div>

              <div className="icon-6">
                <img
                  className="icon-mask-2"
                  alt="Icon mask"
                  src="/img/icon-mask-1.png"
                />
              </div>
            </div>
          </div>

          <div className="coin-ethereum-2">
            <div className="overlap-26">
              <div className="overlap-group-wrapper-2">
                <div className="overlap-group-46">
                  <img
                    className="img-12"
                    alt="Coin mask"
                    src="/img/vector-8.png"
                  />
                </div>
              </div>

              <div className="icon-7">
                <img
                  className="icon-mask-3"
                  alt="Icon mask"
                  src="/img/vector-8.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-2">
        <div className="frame-194">
          <div className="frame-357">
            <Logo className="logo-57" variant="b-w" />
            <div className="frame-358">
              <div className="frame-359">
                <div className="text-wrapper-237">Product</div>

                <div className="frame-359">
                  <div className="text-wrapper-238">Capabilities</div>

                  <div className="text-wrapper-239">Features</div>
                </div>
              </div>

              <div className="frame-359">
                <div className="text-wrapper-237">Resources</div>

                <div className="frame-359">
                  <div className="text-wrapper-238">Blog</div>

                  <div className="text-wrapper-239">FAQs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-3">
            <div className="frame-301">
              <div className="frame-360">
                <div className="text-wrapper-240">NEWSLETTER</div>
              </div>

              <p className="text-wrapper-241">
                Sign Up to be the first to know about the latest trends and
                events in the crypto world
              </p>
            </div>

            <div className="frame-353">
              <Input
                className="design-component-instance-node-11"
                frameClassName="input-12"
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
                className="design-component-instance-node-11"
                frameClassName="input-12"
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
                className="button-main-25"
                color="secondary"
                frameClassName="button-main-26"
                leftIcon={false}
                rightIcon={false}
                size="large"
                state="default"
              />
            </div>
          </div>

          <div className="contact-4">
            <div className="frame-359">
              <div className="frame-360">
                <div className="text-wrapper-240">GET IN TOUCH</div>
              </div>

              <div className="frame-361">
                <div className="frame-362">
                  <img
                    className="vector-89"
                    alt="Vector"
                    src="/img/vector-79.png"
                  />

                  <div className="text-wrapper-242">hello@bramp.io</div>
                </div>

                <img className="line-7" alt="Line" src="/img/line-17-2x.png" />
              </div>
            </div>

            <div className="frame-301">
              <div className="frame-299">
                <div className="text-wrapper-243">Address</div>

                <p className="text-wrapper-241">
                  2125 Bad Boys Lane, Wuse 2, Abuja
                </p>
              </div>

              <div className="frame-299">
                <div className="text-wrapper-243">Office Hours</div>

                <p className="text-wrapper-241">
                  Monday to Friday: 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            <div className="socials-2">
              <div className="frame-363">
                <IconMenuWrapper
                  className="icons-46"
                  icon="twitter"
                  iconTwitter="/img/icons-35.png"
                />
              </div>

              <div className="frame-364">
                <IconMenuWrapper
                  className="icons-47"
                  icon="youtube-outline"
                  iconYoutubeOutline="/img/icons-34.png"
                />
              </div>

              <div className="frame-364">
                <IconMenuWrapper
                  className="icons-47"
                  icon="instagram"
                  iconInstagram="/img/icons-12.png"
                />
              </div>

              <div className="frame-364">
                <IconMenuWrapper
                  className="icons-47"
                  icon="facebook-1"
                  iconFacebook="/img/icons-13.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-365">
          <div className="frame-366">
            <div className="frame-215">
              <div className="ph-copyright-2">
                <img
                  className="vector-90"
                  alt="Vector"
                  src="/img/vector-80.png"
                />
              </div>

              <div className="text-wrapper-244">Bramp 2025</div>
            </div>

            <div className="text-wrapper-244">All Rights Reserved</div>
          </div>

          <div className="frame-367">
            <div className="text-wrapper-245">Terms of Use</div>

            <div className="text-wrapper-245">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
