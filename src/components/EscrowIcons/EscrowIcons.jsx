/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const EscrowIcons = ({
  icon,
  className,
  iconCopy = "/img/icon-copy.png",
}) => {
  return (
    <img
      className={`escrow-icons icon-0-${icon} ${className}`}
      alt="Icon rocket"
      src={
        icon === "arrow-head"
          ? "/img/icon-arrow-head-1.png"
          : icon === "PDF"
            ? "/img/icon-pdf.png"
            : icon === "loading-03"
              ? "/img/icon-loading-03.png"
              : icon === "loading-02"
                ? "/img/icon-loading-02.png"
                : icon === "cancelled-2"
                  ? "/img/icon-cancelled-2.png"
                  : icon === "cancelled-1"
                    ? "/img/icon-cancelled-1.png"
                    : icon === "progress-2"
                      ? "/img/icon-progress-2.png"
                      : icon === "completed-2"
                        ? "/img/icon-completed-2.png"
                        : icon === "completed-1"
                          ? "/img/icon-completed-1.png"
                          : icon === "progress-1"
                            ? "/img/icon-progress-1.png"
                            : icon === "pending"
                              ? "/img/icon-pending.png"
                              : icon === "copy"
                                ? iconCopy
                                : icon === "share"
                                  ? "/img/icon-share.png"
                                  : icon === "search"
                                    ? "/img/icon-search-4.png"
                                    : icon === "shopping-bag"
                                      ? "/img/icon-shopping-bag-2.png"
                                      : icon === "notification"
                                        ? "/img/icon-notification-4.png"
                                        : icon === "help"
                                          ? "/img/icon-help.png"
                                          : icon === "settings"
                                            ? "/img/icon-settings-1.png"
                                            : icon === "inbox"
                                              ? "/img/icon-inbox.png"
                                              : icon === "dashboard"
                                                ? "/img/icon-dashboard-5.png"
                                                : icon === "deal"
                                                  ? "/img/icon-deal.png"
                                                  : icon === "home"
                                                    ? "/img/icon-home-1.png"
                                                    : icon === "swap-2"
                                                      ? "/img/icon-swap-2.png"
                                                      : icon === "swap"
                                                        ? "/img/icon-swap.png"
                                                        : icon === "tick"
                                                          ? "/img/icon-tick-2.png"
                                                          : icon === "dot-2"
                                                            ? "/img/icon-dot-2.png"
                                                            : icon === "dot"
                                                              ? "/img/icon-dot-3.png"
                                                              : icon ===
                                                                  "password-hide"
                                                                ? "/img/icon-password-hide.png"
                                                                : icon ===
                                                                    "cancel"
                                                                  ? "/img/icon-cancel-1.png"
                                                                  : icon ===
                                                                      "password-view"
                                                                    ? "/img/icon-password-view.png"
                                                                    : icon ===
                                                                        "activity"
                                                                      ? "/img/icon-activity.png"
                                                                      : icon ===
                                                                          "overview"
                                                                        ? "/img/icon-overview.png"
                                                                        : icon ===
                                                                            "apple"
                                                                          ? "/img/icon-apple.png"
                                                                          : icon ===
                                                                              "google"
                                                                            ? "/img/icon-google.png"
                                                                            : icon ===
                                                                                "chevron-up"
                                                                              ? "/img/icon-chevron-up-2.png"
                                                                              : icon ===
                                                                                  "export"
                                                                                ? "/img/icon-export-4.png"
                                                                                : icon ===
                                                                                    "download"
                                                                                  ? "/img/icon-download-4.png"
                                                                                  : icon ===
                                                                                      "success"
                                                                                    ? "/img/icon-success.png"
                                                                                    : icon ===
                                                                                        "filter"
                                                                                      ? "/img/icon-filter-3.png"
                                                                                      : icon ===
                                                                                          "more"
                                                                                        ? "/img/icon-more.png"
                                                                                        : icon ===
                                                                                            "calender"
                                                                                          ? "/img/icon-calender.png"
                                                                                          : icon ===
                                                                                              "dollar"
                                                                                            ? "/img/icon-dollar-4.png"
                                                                                            : icon ===
                                                                                                "arrow-up"
                                                                                              ? "/img/icon-arrow-up-1.png"
                                                                                              : icon ===
                                                                                                  "upload"
                                                                                                ? "/img/icon-upload.png"
                                                                                                : icon ===
                                                                                                    "chevron-down"
                                                                                                  ? "/img/icon-chevron-down-1.png"
                                                                                                  : icon ===
                                                                                                      "delete"
                                                                                                    ? "/img/icon-delete-4.png"
                                                                                                    : icon ===
                                                                                                        "image"
                                                                                                      ? "/img/icon-image-5.png"
                                                                                                      : "/img/icon-rocket.png"
      }
    />
  );
};

EscrowIcons.propTypes = {
  icon: PropTypes.oneOf([
    "dashboard",
    "completed-2",
    "loading-03",
    "activity",
    "dot-2",
    "pending",
    "cancelled-1",
    "progress-2",
    "delete",
    "tick",
    "dollar",
    "password-hide",
    "share",
    "filter",
    "swap",
    "notification",
    "arrow-up",
    "copy",
    "success",
    "deal",
    "download",
    "cancel",
    "search",
    "chevron-up",
    "progress-1",
    "cancelled-2",
    "overview",
    "chevron-down",
    "google",
    "loading-02",
    "arrow-head",
    "home",
    "dot",
    "calender",
    "apple",
    "export",
    "help",
    "PDF",
    "swap-2",
    "completed-1",
    "more",
    "password-view",
    "image",
    "rocket",
    "settings",
    "shopping-bag",
    "upload",
    "inbox",
  ]),
  iconCopy: PropTypes.string,
};
