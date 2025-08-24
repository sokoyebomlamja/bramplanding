/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconMenuWrapper = ({
  icon,
  className,
  iconAdd = "/img/icon-add.png",
  iconTwitter = "/img/icon-twitter.png",
  iconYoutubeOutline = "/img/icon-youtube-outline.png",
  iconInstagram = "/img/icon-instagram.png",
  iconFacebook = "/img/icon-facebook-1.png",
}) => {
  return (
    <img
      className={`icon-menu-wrapper icon-1-${icon} ${className}`}
      alt="Icon menu"
      src={
        icon === "geo-fencing"
          ? "/img/icon-geo-fencing.png"
          : icon === "integration"
            ? "/img/icon-integration.png"
            : icon === "conversion"
              ? "/img/icon-conversion.png"
              : icon === "reporting"
                ? "/img/icon-reporting.png"
                : icon === "optimization"
                  ? "/img/icon-optimization.png"
                  : icon === "user-friendly-interface"
                    ? "/img/icon-user-friendly-interface.png"
                    : icon === "dot"
                      ? "/img/icon-dot.png"
                      : icon === "instagram"
                        ? iconInstagram
                        : icon === "twitter"
                          ? iconTwitter
                          : icon === "facebook-1"
                            ? iconFacebook
                            : icon === "facebook-2"
                              ? "/img/icon-facebook-2.png"
                              : icon === "youtube-outline"
                                ? iconYoutubeOutline
                                : icon === "youtube-filled"
                                  ? "/img/icon-youtube-filled.png"
                                  : icon === "icon-park-solid-success"
                                    ? "/img/icon-icon-park-solid-success.png"
                                    : icon === "hand-click"
                                      ? "/img/icon-hand-click.png"
                                      : icon === "stock-transfer"
                                        ? "/img/icon-stock-transfer.png"
                                        : icon === "warehouse"
                                          ? "/img/icon-warehouse.png"
                                          : icon === "stores"
                                            ? "/img/icon-stores.png"
                                            : icon === "user-management"
                                              ? "/img/icon-user-management.png"
                                              : icon === "people"
                                                ? "/img/icon-people.png"
                                                : icon === "export"
                                                  ? "/img/icon-export.png"
                                                  : icon === "import"
                                                    ? "/img/icon-import.png"
                                                    : icon === "percentage"
                                                      ? "/img/icon-percentage.png"
                                                      : icon === "naira"
                                                        ? "/img/icon-naira.png"
                                                        : icon === "image"
                                                          ? "/img/icon-image.png"
                                                          : icon === "tick"
                                                            ? "/img/icon-tick.png"
                                                            : icon ===
                                                                "arrow-left"
                                                              ? "/img/icon-arrow-left.png"
                                                              : icon ===
                                                                  "cancel"
                                                                ? "/img/icon-cancel.png"
                                                                : icon ===
                                                                    "search"
                                                                  ? "/img/icon-search.png"
                                                                  : icon ===
                                                                      "variant"
                                                                    ? "/img/icon-variant.png"
                                                                    : icon ===
                                                                        "sub-category"
                                                                      ? "/img/icon-sub-category.png"
                                                                      : icon ===
                                                                          "excel"
                                                                        ? "/img/icon-excel-3.png"
                                                                        : icon ===
                                                                            "delete"
                                                                          ? "/img/icon-delete.png"
                                                                          : icon ===
                                                                              "view"
                                                                            ? "/img/icon-view.png"
                                                                            : icon ===
                                                                                "inventory"
                                                                              ? "/img/icon-inventory.png"
                                                                              : icon ===
                                                                                  "products"
                                                                                ? "/img/icon-products.png"
                                                                                : icon ===
                                                                                    "categories"
                                                                                  ? "/img/icon-categories.png"
                                                                                  : icon ===
                                                                                      "notification"
                                                                                    ? "/img/icon-notification.png"
                                                                                    : icon ===
                                                                                        "point-of-sale"
                                                                                      ? "/img/icon-point-of-sale.png"
                                                                                      : icon ===
                                                                                          "settings"
                                                                                        ? "/img/icon-settings-3.png"
                                                                                        : icon ===
                                                                                            "sell"
                                                                                          ? "/img/icon-sell.png"
                                                                                          : icon ===
                                                                                              "nigeria-flag"
                                                                                            ? "/img/icon-nigeria-flag.png"
                                                                                            : icon ===
                                                                                                "information"
                                                                                              ? "/img/icon-information.png"
                                                                                              : icon ===
                                                                                                  "password"
                                                                                                ? "/img/icon-password.png"
                                                                                                : icon ===
                                                                                                    "required"
                                                                                                  ? "/img/icon-required.png"
                                                                                                  : icon ===
                                                                                                      "chevron-up"
                                                                                                    ? "/img/icon-chevron-up.png"
                                                                                                    : icon ===
                                                                                                        "add"
                                                                                                      ? iconAdd
                                                                                                      : icon ===
                                                                                                          "mingcute-currency-nigeria-2-line"
                                                                                                        ? "/img/icon-mingcute-currency-nigeria-2-line.png"
                                                                                                        : icon ===
                                                                                                            "sales"
                                                                                                          ? "/img/icon-sales.png"
                                                                                                          : icon ===
                                                                                                              "filter"
                                                                                                            ? "/img/icon-filter.png"
                                                                                                            : icon ===
                                                                                                                "edit"
                                                                                                              ? "/img/icon-edit.png"
                                                                                                              : icon ===
                                                                                                                  "mdi-chevron-down"
                                                                                                                ? "/img/icon-mdi-chevron-down.png"
                                                                                                                : icon ===
                                                                                                                    "dashboard"
                                                                                                                  ? "/img/icon-dashboard.png"
                                                                                                                  : "/img/icon-menu.png"
      }
    />
  );
};

IconMenuWrapper.propTypes = {
  icon: PropTypes.oneOf([
    "dashboard",
    "integration",
    "twitter",
    "mdi-chevron-down",
    "hand-click",
    "delete",
    "excel",
    "tick",
    "inventory",
    "filter",
    "variant",
    "sell",
    "optimization",
    "notification",
    "reporting",
    "mingcute-currency-nigeria-2-line",
    "youtube-filled",
    "icon-park-solid-success",
    "arrow-left",
    "cancel",
    "categories",
    "point-of-sale",
    "percentage",
    "nigeria-flag",
    "warehouse",
    "search",
    "naira",
    "sub-category",
    "facebook-2",
    "user-friendly-interface",
    "youtube-outline",
    "required",
    "sales",
    "stock-transfer",
    "stores",
    "menu",
    "dot",
    "geo-fencing",
    "conversion",
    "people",
    "add",
    "export",
    "information",
    "view",
    "facebook-1",
    "edit",
    "user-management",
    "import",
    "products",
    "image",
    "password",
    "instagram",
    "settings",
    "chevron-up",
  ]),
  iconAdd: PropTypes.string,
  iconTwitter: PropTypes.string,
  iconYoutubeOutline: PropTypes.string,
  iconInstagram: PropTypes.string,
  iconFacebook: PropTypes.string,
};
