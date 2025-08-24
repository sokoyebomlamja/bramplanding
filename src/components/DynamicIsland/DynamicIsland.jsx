/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DynamicIsland = ({
  whoseAirpods = "David’s Airpod Pro",
  howMuchTimeIsLeft = "3:35",
  whatMusic = "Music",
  fromWho = "1 Photo",
  precentage = "75",
  showCharging = false,
  showPrecentage = true,
  howLongIsTheCall = "0:25",
  size,
  type,
  className,
  truedepthCameraClassName,
  facetimeCameraClassName,
  cameraClassName,
}) => {
  return (
    <div className={`dynamic-island type-2-${type} ${size} ${className}`}>
      {(type === "air-drop" ||
        type === "airpods-pro" ||
        type === "alarm" ||
        type === "battery" ||
        type === "cam-active" ||
        type === "face-ID" ||
        type === "face-time" ||
        type === "focus-modes" ||
        type === "lock" ||
        type === "maps" ||
        type === "mic-active" ||
        type === "mic-cam-active" ||
        type === "mini" ||
        type === "mobile-call" ||
        type === "music-player" ||
        type === "ringer" ||
        type === "screen-recording" ||
        type === "silent-alarm" ||
        type === "timer" ||
        type === "wallet-card" ||
        type === "weather") && (
        <div className="truedepth-camera-4">
          {((size === "expanded" && type === "mobile-call") ||
            (size === "expanded" && type === "music-player") ||
            type === "face-time" ||
            type === "lock" ||
            type === "weather") && (
            <div className="lock-2">
              {type === "lock" && <div className="text-wrapper-7">􀎡</div>}

              {type === "mobile-call" && (
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="/img/ellipse-9.png"
                />
              )}

              {(type === "mobile-call" ||
                (size === "expanded" && type === "weather")) && (
                <>
                  <div className="phone-circle-fill">
                    {type === "mobile-call" && (
                      <div className="group">
                        <img
                          className="vector-2"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />

                        <div className="vector-wrapper">
                          <img
                            className="vector-3"
                            alt="Vector"
                            src="/img/vector-16.png"
                          />
                        </div>
                      </div>
                    )}

                    {type === "weather" && (
                      <>
                        <div className="time-2">
                          <div className="text-wrapper-8">3 AM</div>

                          <div className="text-wrapper-9">7 AM</div>

                          <div className="text-wrapper-10">11 PM</div>

                          <div className="text-wrapper-11">3 PM</div>

                          <div className="text-wrapper-12">3 PM</div>
                        </div>

                        <img
                          className="wind-direction"
                          alt="Wind direction"
                          src="/img/wind-direction.png"
                        />

                        <div className="separators">
                          <div className="overlap">
                            <img
                              className="vector-4"
                              alt="Vector"
                              src="/img/vector-14-1.png"
                            />

                            <img
                              className="vector-5"
                              alt="Vector"
                              src="/img/vector-13-1.png"
                            />
                          </div>
                        </div>

                        <img
                          className="wind-speeds"
                          alt="Wind speeds"
                          src="/img/wind-speeds.png"
                        />

                        <div className="rain-precentage">
                          <div className="rectangle" />

                          <div className="rectangle-2" />

                          <div className="rectangle-3" />

                          <div className="rectangle-4" />

                          <div className="rectangle-5" />

                          <div className="rectangle-6" />
                        </div>

                        <img
                          className="rain-precentage-day"
                          alt="Rain precentage day"
                          src="/img/rain-precentage-day.png"
                        />
                      </>
                    )}
                  </div>

                  <div className="precentages-speed">
                    {type === "weather" && (
                      <>
                        <div className="text-wrapper-13">30</div>

                        <div className="text-wrapper-14">20</div>

                        <div className="text-wrapper-15">10</div>

                        <div className="text-wrapper-16">0</div>
                      </>
                    )}

                    {type === "mobile-call" && (
                      <div className="group">
                        <img
                          className="vector-6"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />

                        <div className="overlap-group-2">
                          <img
                            className="vector-7"
                            alt="Vector"
                            src="/img/vector-19.png"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="compass">
                    {type === "weather" && (
                      <>
                        <div className="overlap-group-3">
                          <div className="rectangle-7" />

                          <img
                            className="vector-8"
                            alt="Vector"
                            src="/img/vector-8-1.png"
                          />

                          <img
                            className="vector-9"
                            alt="Vector"
                            src="/img/vector-8-1.png"
                          />

                          <img
                            className="vector-10"
                            alt="Vector"
                            src="/img/vector-10-1.png"
                          />

                          <img
                            className="vector-11"
                            alt="Vector"
                            src="/img/vector-11-1.png"
                          />

                          <img
                            className="vector-12"
                            alt="Vector"
                            src="/img/vector-12-1.png"
                          />

                          <div className="location-icon">
                            <div className="group-2">
                              <img
                                className="vector-13"
                                alt="Vector"
                                src="/img/vector-8.png"
                              />

                              <img
                                className="vector-14"
                                alt="Vector"
                                src="/img/vector-22.png"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-wrapper-17">WNW</div>
                      </>
                    )}

                    {type === "mobile-call" && (
                      <div className="overlap-2">
                        <div className="text-wrapper-18">David</div>

                        <div className="text-wrapper-19">mobile</div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {(type === "face-time" ||
                type === "music-player" ||
                (size === "compact" && type === "weather")) && (
                <>
                  <div className="truedepth-camera-4">
                    {type === "face-time" && (
                      <>
                        <img
                          className="ellipse-2"
                          alt="Ellipse"
                          src="/img/ellipse-29.png"
                        />

                        <div className="frame-3">
                          <div className="frame-4">
                            <div className="element-photo">{fromWho}</div>

                            <div className="text-wrapper-20">
                              FaceTime Audio
                            </div>
                          </div>

                          <div className="text-wrapper-21">􀅴</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="facetime-camera-3">
                    {["music-player", "weather"].includes(type) && (
                      <div className="camera" />
                    )}

                    {type === "face-time" && (
                      <>
                        <div className="div-wrapper-2">
                          <div className="text-wrapper-22">􀪷</div>
                        </div>

                        <div className="div-wrapper-2">
                          <div className="text-wrapper-23">􀊱</div>
                        </div>

                        <div className="div-wrapper-3">
                          <div className="text-wrapper-24">􀍊</div>
                        </div>

                        <div className="div-wrapper-3">
                          <div className="text-wrapper-25">􁅀</div>
                        </div>

                        <div className="cancel">
                          <div className="text-wrapper-26">􀍇</div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}

              {type === "weather" && size === "expanded" && (
                <div className="indo">
                  <div className="overlap-3">
                    <div className="text-wrapper-27">12</div>

                    <div className="text-wrapper-28">mph</div>

                    <div className="text-wrapper-29">Gusts: 19 mph</div>
                  </div>

                  <div className="wind-icon">
                    <div className="group-3">
                      <img
                        className="vector-15"
                        alt="Vector"
                        src="/img/vector-8.png"
                      />

                      <img
                        className="vector-16"
                        alt="Vector"
                        src="/img/vector-24.png"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {((size === "compact" && type === "music-player") ||
            (size === "expanded" && type === "timer") ||
            type === "air-drop" ||
            type === "alarm" ||
            type === "face-ID" ||
            type === "maps" ||
            type === "wallet-card") && (
            <>
              <div className="icon">
                {(type === "face-ID" ||
                  type === "wallet-card" ||
                  (size === "compact" && type === "air-drop")) && (
                  <div className="overlap-group-4">
                    {type === "air-drop" && <div className="ellipse-3" />}

                    {["air-drop", "face-ID"].includes(type) && (
                      <img
                        className="ellipse-4"
                        alt="Ellipse"
                        src={
                          size === "compact"
                            ? "/img/ellipse-31.png"
                            : size === "expanded"
                              ? "/img/vector-8.png"
                              : undefined
                        }
                      />
                    )}

                    {type === "air-drop" && (
                      <>
                        <img
                          className="ellipse-5"
                          alt="Ellipse"
                          src="/img/ellipse-32.png"
                        />

                        <img
                          className="ellipse-6"
                          alt="Ellipse"
                          src="/img/ellipse-33.png"
                        />
                      </>
                    )}

                    {size === "expanded" && (
                      <div className="overlap-group-5">
                        <img
                          className="vector-17"
                          alt="Vector"
                          src="/img/vector-9.png"
                        />

                        <div className="ellipse-7" />
                      </div>
                    )}
                  </div>
                )}

                {type === "maps" && <>􀄹</>}

                {type === "music-player" && (
                  <img
                    className="vector-18"
                    alt="Vector"
                    src="/img/vector-10.png"
                  />
                )}
              </div>

              <div className="camera-sensors">
                {(type === "timer" ||
                  type === "wallet-card" ||
                  (size === "compact" && type === "air-drop")) && (
                  <div className="cameras-2">
                    {(size === "expanded" || type === "air-drop") && (
                      <>
                        <div className="truedepth-camera">
                          {type === "timer" && (
                            <div className="div-wrapper-4">
                              <div className="group-4">
                                <div className="overlap-group-6">
                                  <div className="text-wrapper-30">􀊆</div>
                                </div>

                                <div className="overlap-4">
                                  <div className="text-wrapper-31">􀆄</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="facetime-camera">
                          {size === "compact" && <div className="camera" />}

                          {type === "timer" && (
                            <>
                              <div className="element">{howMuchTimeIsLeft}</div>

                              <div className="text-wrapper-32">Timer</div>
                            </>
                          )}
                        </div>
                      </>
                    )}

                    {type === "wallet-card" && <></>}
                  </div>
                )}

                {(type === "maps" ||
                  type === "music-player" ||
                  (size === "expanded" && type === "air-drop")) && (
                  <>
                    <div className="FT">
                      {type === "maps" && <>FT</>}

                      {size === "expanded" && (
                        <img
                          className="ellipse-8"
                          alt="Ellipse"
                          src="/img/ellipse-38-1.png"
                        />
                      )}
                    </div>

                    <div className="element-2">
                      {type === "maps" && <>900</>}

                      {size === "expanded" && (
                        <>
                          <div className="overlap-group-wrapper">
                            <div className="overlap-group-7">
                              <div className="ellipse-9" />

                              <img
                                className="ellipse-10"
                                alt="Ellipse"
                                src="/img/ellipse-31-1.png"
                              />

                              <img
                                className="ellipse-11"
                                alt="Ellipse"
                                src="/img/ellipse-32-1.png"
                              />

                              <img
                                className="ellipse-12"
                                alt="Ellipse"
                                src="/img/ellipse-33-1.png"
                              />

                              <img
                                className="rectangle-8"
                                alt="Rectangle"
                                src="/img/rectangle-37.png"
                              />
                            </div>
                          </div>

                          <div className="text">
                            <div className="element-photo-2">{fromWho}</div>

                            <div className="text-wrapper-33">AirDrop</div>
                          </div>
                        </>
                      )}

                      {type === "music-player" && <div className="camera" />}
                    </div>
                  </>
                )}

                {type === "alarm" && (
                  <>
                    <div className="leading-wrapper">
                      <div className="div-wrapper-4">
                        <div className="buttons">
                          <div className="group-4">
                            <div className="overlap-group-6">
                              <div className="text-wrapper-34">􀖃</div>
                            </div>

                            <div className="overlap-4">
                              <div className="text-wrapper-31">􀆄</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="alarm">
                      <div className="group-5">
                        <img
                          className="vector-19"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />

                        <img
                          className="vector-20"
                          alt="Vector"
                          src="/img/vector-13.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-35">Alarm</div>

                    <div className="text-wrapper-36">6:30AM</div>
                  </>
                )}
              </div>

              <div className="download">
                {size === "compact" && type === "air-drop" && (
                  <img
                    className="ellipse-13"
                    alt="Ellipse"
                    src="/img/ellipse-38.png"
                  />
                )}

                {((size === "expanded" && type === "air-drop") ||
                  type === "alarm" ||
                  type === "face-ID" ||
                  type === "maps" ||
                  type === "music-player" ||
                  type === "timer" ||
                  type === "wallet-card") && (
                  <div className="truedepth-camera-4">
                    {["air-drop", "alarm", "timer"].includes(type) && (
                      <>
                        <div className="truedepth-camera-2" />

                        <div className="camera-wrapper">
                          <div className="camera" />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {type === "maps" && (
                  <div className="camera-wrapper">
                    <div className="camera" />
                  </div>
                )}

                {type === "music-player" && (
                  <>
                    <div className="rectangle-9" />

                    <div className="rectangle-10" />

                    <div className="rectangle-11" />

                    <div className="rectangle-12" />

                    <div className="rectangle-13" />
                  </>
                )}
              </div>
            </>
          )}

          {size === "compact" && type === "airpods-pro" && (
            <div className="airpods-pro-left">
              <img
                className="airpods-gen"
                alt="Airpods gen"
                src="/img/airpods-3rd-gen.png"
              />
            </div>
          )}

          {((size === "compact" && type === "airpods-pro") ||
            (size === "expanded" && type === "mobile-call") ||
            (size === "expanded" && type === "music-player") ||
            type === "face-time" ||
            type === "lock" ||
            type === "weather") && (
            <div className="camera-2">
              {(size === "compact" || type === "weather") && (
                <>
                  <div className="truedepth-camera-3">
                    {size === "compact" && type === "weather" && (
                      <div className="group-6">
                        <img
                          className="vector-21"
                          alt="Vector"
                          src="/img/vector-8.png"
                        />

                        <img
                          className="vector-22"
                          alt="Vector"
                          src="/img/vector-26.png"
                        />
                      </div>
                    )}
                  </div>

                  <div className="facetime-camera-2">
                    <div className="camera-3">
                      {size === "compact" && type === "weather" && (
                        <>
                          <div className="text-wrapper-37">STARTS</div>

                          <div className="text-wrapper-38">15m</div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}

              {["face-time", "mobile-call"].includes(type) && (
                <div className="cameras">
                  <div className="truedepth-camera-2" />

                  <div className="camera-wrapper">
                    <div className="camera" />
                  </div>
                </div>
              )}

              {type === "music-player" && (
                <>
                  <div className="music-playing">
                    <div className="player-track-text">
                      <div className="overlap-group-8">
                        <div className="music">{whatMusic}</div>

                        <div className="text-wrapper-39">Open</div>
                      </div>
                    </div>

                    <div className="music-wave">
                      <div className="rectangle-14" />

                      <div className="rectangle-15" />

                      <div className="rectangle-16" />

                      <div className="rectangle-17" />

                      <div className="rectangle-18" />

                      <div className="rectangle-19" />
                    </div>

                    <div className="controls">
                      <div className="pause">
                        <img className="img-2" alt="Img" src="/img/1.png" />
                      </div>

                      <div className="back">
                        <img className="img-3" alt="Img" src="/img/2.png" />
                      </div>

                      <div className="next">
                        <img className="img-4" alt="Img" src="/img/3.png" />
                      </div>

                      <div className="airplay">
                        <img className="img-5" alt="Img" src="/img/4.png" />
                      </div>

                      <div className="song-bar">
                        <div className="text-wrapper-40">2:10</div>

                        <div className="text-wrapper-41">-2:35</div>

                        <div className="bar">
                          <img
                            className="rectangle-20"
                            alt="Rectangle"
                            src="/img/rectangle-5.png"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="song-thumbnail" />
                  </div>

                  <img
                    className="vector-23"
                    alt="Vector"
                    src="/img/vector-20.png"
                  />
                </>
              )}
            </div>
          )}

          {((size === "compact" && type === "mobile-call") ||
            (size === "compact" && type === "timer") ||
            (size === "expanded" && type === "airpods-pro") ||
            type === "battery" ||
            type === "ringer" ||
            type === "silent-alarm") && (
            <div className="compnents">
              {[
                "airpods-pro",
                "battery",
                "ringer",
                "silent-alarm",
                "timer",
              ].includes(type) && (
                <>
                  <div className="charging-text-left">
                    {["battery", "ringer"].includes(type) && (
                      <div className="charging">
                        {type === "battery" && <>Charging</>}

                        {type === "ringer" && <>􀋚</>}
                      </div>
                    )}

                    {["silent-alarm", "timer"].includes(type) && (
                      <img
                        className="img-6"
                        alt="Img"
                        src={
                          type === "timer" ? "/img/union.png" : "/img/2x.png"
                        }
                      />
                    )}

                    {size === "expanded" && (
                      <>
                        <div className="leading">
                          <img
                            className="airpods-rd-gen"
                            alt="Airpods gen"
                            src="/img/airpods-3rd-gen-1.png"
                          />
                        </div>

                        <div className="trailing">
                          <div className="overlap-group-9">
                            {showPrecentage && (
                              <div className="element-3">{precentage}</div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="group-7">
                    {["battery", "ringer"].includes(type) && (
                      <>
                        <div className="truedepth-camera-2" />

                        <div className="camera-wrapper">
                          <div className="camera" />
                        </div>
                      </>
                    )}

                    {["airpods-pro", "silent-alarm", "timer"].includes(
                      type,
                    ) && (
                      <div className="cameras">
                        <div className="truedepth-camera-2" />

                        <div className="camera-wrapper">
                          <div className="camera" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="charging-icon-right-2">
                    {["airpods-pro", "battery"].includes(type) && (
                      <>
                        <div className="frame-368">
                          {size === "compact" && (
                            <>
                              <div className="frame-5" />

                              <div className="frame-6" />
                            </>
                          )}

                          {size === "expanded" && <>Connected</>}
                        </div>

                        <div className="element-4">
                          {size === "compact" && <>{precentage}</>}

                          {size === "expanded" && <>{whoseAirpods}</>}
                        </div>
                      </>
                    )}

                    {["silent-alarm", "timer"].includes(type) && (
                      <div className="silent">
                        {type === "silent-alarm" && <>Silent</>}

                        {type === "timer" && <>1.99</>}
                      </div>
                    )}

                    {type === "ringer" && <>Ring</>}
                  </div>
                </>
              )}

              {type === "mobile-call" && (
                <>
                  <div className="frame-7">
                    <div className="overlap-group-10">
                      <div className="frame-8">
                        <img
                          className="vector-24"
                          alt="Vector"
                          src="/img/vector-11.png"
                        />
                      </div>

                      <div className="element-min">{howLongIsTheCall}</div>
                    </div>
                  </div>

                  <div className="cameras-wrapper">
                    <div className="cameras">
                      <div className="truedepth-camera-2" />

                      <div className="camera-wrapper">
                        <div className="camera" />
                      </div>
                    </div>
                  </div>

                  <img className="phone" alt="Phone" src="/img/phone.png" />
                </>
              )}
            </div>
          )}

          {size === "mini" && <div className="background" />}

          {((size === "compact" && type === "airpods-pro") ||
            (size === "mini" && type === "mobile-call") ||
            (size === "mini" && type === "timer") ||
            type === "focus-modes" ||
            type === "screen-recording") && (
            <img
              className="components"
              alt="Components"
              src={
                type === "screen-recording"
                  ? "/img/components.png"
                  : type === "focus-modes"
                    ? "/img/components-3.png"
                    : type === "mobile-call"
                      ? "/img/components-1.png"
                      : type === "timer"
                        ? "/img/components-2.png"
                        : size === "compact"
                          ? "/img/airpods-pro-right.png"
                          : undefined
              }
            />
          )}
        </div>
      )}

      {["cam-active", "mic-active", "mic-cam-active", "mini"].includes(
        type,
      ) && (
        <>
          <div className="camera-wrapper">
            <div className="camera" />
          </div>

          <div className="ellipse-14">
            {type === "mic-cam-active" && (
              <>
                <div className="ellipse-15" />

                <div className="ellipse-16" />
              </>
            )}

            {type === "mini" && (
              <div className="charging-icon-right">
                <div className="element-5">{precentage}</div>

                <div className="frame-9">
                  <div className="frame-5" />

                  <div className="frame-6" />
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {type === "default" && (
        <>
          <div className={`truedepth-camera-2 ${truedepthCameraClassName}`} />

          <div className={`camera-wrapper ${facetimeCameraClassName}`}>
            <div className={`camera ${cameraClassName}`} />
          </div>
        </>
      )}
    </div>
  );
};

DynamicIsland.propTypes = {
  whoseAirpods: PropTypes.string,
  howMuchTimeIsLeft: PropTypes.string,
  whatMusic: PropTypes.string,
  fromWho: PropTypes.string,
  precentage: PropTypes.string,
  showCharging: PropTypes.bool,
  showPrecentage: PropTypes.bool,
  howLongIsTheCall: PropTypes.string,
  size: PropTypes.oneOf(["mini", "expanded", "battery", "compact"]),
  type: PropTypes.oneOf([
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
  ]),
};
