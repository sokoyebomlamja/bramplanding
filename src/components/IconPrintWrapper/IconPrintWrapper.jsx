/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconPrintWrapper = ({
  icon,
  className,
  iconIncrease = "/img/icon-increase-1.png",
  iconDecrease = "/img/icon-decrease-1.png",
}) => {
  return (
    <img
      className={`icon-print-wrapper icon-${icon} ${className}`}
      alt="Icon print"
      src={
        icon === "dots"
          ? "/img/icon-dots-1.png"
          : icon === "chevron-up"
            ? "/img/icon-chevron-up-2.png"
            : icon === "chevron-down"
              ? "/img/icon-chevron-down-1.png"
              : icon === "download"
                ? "/img/icon-download-1.png"
                : icon === "clock"
                  ? "/img/icon-clock-1.png"
                  : icon === "date"
                    ? "/img/icon-date-2.png"
                    : icon === "export-2"
                      ? "/img/icon-export-2-2.png"
                      : icon === "discount"
                        ? "/img/icon-discount-1.png"
                        : icon === "increase"
                          ? iconIncrease
                          : icon === "decrease"
                            ? iconDecrease
                            : icon === "password-2"
                              ? "/img/icon-password-2-1.png"
                              : icon === "question-mark"
                                ? "/img/icon-question-mark.png"
                                : icon === "calculator"
                                  ? "/img/icon-calculator.png"
                                  : icon === "returns"
                                    ? "/img/icon-returns.png"
                                    : icon === "reports"
                                      ? "/img/icon-reports.png"
                                      : icon === "clear"
                                        ? "/img/icon-clear.png"
                                        : icon === "retrieve"
                                          ? "/img/icon-retrieve.png"
                                          : icon === "manage"
                                            ? "/img/icon-manage.png"
                                            : icon === "payment-card"
                                              ? "/img/icon-payment-card.png"
                                              : icon === "delivery-1"
                                                ? "/img/icon-delivery-1.png"
                                                : icon === "delivery-2"
                                                  ? "/img/icon-delivery-2.png"
                                                  : icon === "afghani"
                                                    ? "/img/icon-afghani.png"
                                                    : icon === "euro-thick"
                                                      ? "/img/icon-euro-thick.png"
                                                      : icon === "pound"
                                                        ? "/img/icon-pound.png"
                                                        : icon === "euro-light"
                                                          ? "/img/icon-euro-light.png"
                                                          : icon === "dollar"
                                                            ? "/img/icon-dollar.png"
                                                            : icon === "dinar"
                                                              ? "/img/icon-dinar.png"
                                                              : icon === "minus"
                                                                ? "/img/icon-minus.png"
                                                                : icon ===
                                                                    "user"
                                                                  ? "/img/icon-user.png"
                                                                  : icon ===
                                                                      "menu"
                                                                    ? "/img/icon-menu-1.png"
                                                                    : icon ===
                                                                        "pause"
                                                                      ? "/img/icon-pause-1.png"
                                                                      : icon ===
                                                                          "shop"
                                                                        ? "/img/icon-shop.png"
                                                                        : icon ===
                                                                            "point-of-sale-2"
                                                                          ? "/img/icon-point-of-sale-2.png"
                                                                          : icon ===
                                                                              "cash"
                                                                            ? "/img/icon-cash.png"
                                                                            : icon ===
                                                                                "loyalty"
                                                                              ? "/img/icon-loyalty.png"
                                                                              : icon ===
                                                                                  "payment"
                                                                                ? "/img/icon-payment.png"
                                                                                : icon ===
                                                                                    "receipt-2"
                                                                                  ? "/img/icon-receipt-2.png"
                                                                                  : icon ===
                                                                                      "receipt-1"
                                                                                    ? "/img/icon-receipt-1.png"
                                                                                    : icon ===
                                                                                        "setup"
                                                                                      ? "/img/icon-setup.png"
                                                                                      : icon ===
                                                                                          "register"
                                                                                        ? "/img/icon-register.png"
                                                                                        : icon ===
                                                                                            "triangle"
                                                                                          ? "/img/icon-triangle.png"
                                                                                          : icon ===
                                                                                              "icon-park-solid-success"
                                                                                            ? "/img/icon-icon-park-solid-success-2.png"
                                                                                            : icon ===
                                                                                                "hand-click"
                                                                                              ? "/img/icon-hand-click-1.png"
                                                                                              : icon ===
                                                                                                  "stock-transfer"
                                                                                                ? "/img/icon-stock-transfer-1.png"
                                                                                                : icon ===
                                                                                                    "warehouse"
                                                                                                  ? "/img/icon-warehouse-1.png"
                                                                                                  : icon ===
                                                                                                      "stores"
                                                                                                    ? "/img/icon-stores-1.png"
                                                                                                    : icon ===
                                                                                                        "user-management"
                                                                                                      ? "/img/icon-user-management-1.png"
                                                                                                      : icon ===
                                                                                                          "people"
                                                                                                        ? "/img/icon-people-1.png"
                                                                                                        : icon ===
                                                                                                            "export"
                                                                                                          ? "/img/icon-export-1.png"
                                                                                                          : icon ===
                                                                                                              "import"
                                                                                                            ? "/img/icon-import-1.png"
                                                                                                            : icon ===
                                                                                                                "percentage"
                                                                                                              ? "/img/icon-percentage-1.png"
                                                                                                              : icon ===
                                                                                                                  "naira"
                                                                                                                ? "/img/icon-naira-1.png"
                                                                                                                : icon ===
                                                                                                                    "image"
                                                                                                                  ? "/img/icon-image-1.png"
                                                                                                                  : icon ===
                                                                                                                      "tick"
                                                                                                                    ? "/img/icon-tick-2.png"
                                                                                                                    : icon ===
                                                                                                                        "arrow-left"
                                                                                                                      ? "/img/icon-arrow-left-1.png"
                                                                                                                      : icon ===
                                                                                                                          "cancel"
                                                                                                                        ? "/img/icon-cancel-1.png"
                                                                                                                        : icon ===
                                                                                                                            "search"
                                                                                                                          ? "/img/icon-search-1.png"
                                                                                                                          : icon ===
                                                                                                                              "variant"
                                                                                                                            ? "/img/icon-variant-1.png"
                                                                                                                            : icon ===
                                                                                                                                "sub-category"
                                                                                                                              ? "/img/icon-sub-category-1.png"
                                                                                                                              : icon ===
                                                                                                                                  "excel"
                                                                                                                                ? "/img/icon-excel.png"
                                                                                                                                : icon ===
                                                                                                                                    "delete"
                                                                                                                                  ? "/img/icon-delete-1.png"
                                                                                                                                  : icon ===
                                                                                                                                      "view"
                                                                                                                                    ? "/img/icon-view-1.png"
                                                                                                                                    : icon ===
                                                                                                                                        "inventory"
                                                                                                                                      ? "/img/icon-inventory-1.png"
                                                                                                                                      : icon ===
                                                                                                                                          "products"
                                                                                                                                        ? "/img/icon-products-1.png"
                                                                                                                                        : icon ===
                                                                                                                                            "categories"
                                                                                                                                          ? "/img/icon-categories-1.png"
                                                                                                                                          : icon ===
                                                                                                                                              "notification"
                                                                                                                                            ? "/img/icon-notification-1.png"
                                                                                                                                            : icon ===
                                                                                                                                                "point-of-sale-1"
                                                                                                                                              ? "/img/icon-point-of-sale-1.png"
                                                                                                                                              : icon ===
                                                                                                                                                  "settings"
                                                                                                                                                ? "/img/icon-settings-4.png"
                                                                                                                                                : icon ===
                                                                                                                                                    "sell"
                                                                                                                                                  ? "/img/icon-sell-1.png"
                                                                                                                                                  : icon ===
                                                                                                                                                      "nigeria-flag"
                                                                                                                                                    ? "/img/icon-nigeria-flag.png"
                                                                                                                                                    : icon ===
                                                                                                                                                        "information"
                                                                                                                                                      ? "/img/icon-information-1.png"
                                                                                                                                                      : icon ===
                                                                                                                                                          "password"
                                                                                                                                                        ? "/img/icon-password-1.png"
                                                                                                                                                        : icon ===
                                                                                                                                                            "required"
                                                                                                                                                          ? "/img/icon-required-1.png"
                                                                                                                                                          : icon ===
                                                                                                                                                              "add"
                                                                                                                                                            ? "/img/icon-add-1.png"
                                                                                                                                                            : icon ===
                                                                                                                                                                "sales"
                                                                                                                                                              ? "/img/icon-sales-1.png"
                                                                                                                                                              : icon ===
                                                                                                                                                                  "filter"
                                                                                                                                                                ? "/img/icon-filter-2.png"
                                                                                                                                                                : icon ===
                                                                                                                                                                    "edit"
                                                                                                                                                                  ? "/img/icon-edit-1.png"
                                                                                                                                                                  : icon ===
                                                                                                                                                                      "united-kingdom"
                                                                                                                                                                    ? "/img/icon-united-kingdom.png"
                                                                                                                                                                    : icon ===
                                                                                                                                                                        "australia"
                                                                                                                                                                      ? "/img/icon-australia.png"
                                                                                                                                                                      : icon ===
                                                                                                                                                                          "united-states"
                                                                                                                                                                        ? "/img/icon-united-states.png"
                                                                                                                                                                        : icon ===
                                                                                                                                                                            "dashboard"
                                                                                                                                                                          ? "/img/icon-dashboard-2.png"
                                                                                                                                                                          : "/img/icon-print-1.png"
      }
    />
  );
};

IconPrintWrapper.propTypes = {
  icon: PropTypes.oneOf([
    "united-states",
    "dots",
    "triangle",
    "categories",
    "returns",
    "sales",
    "stores",
    "cash",
    "people",
    "payment",
    "export",
    "view",
    "products",
    "shop",
    "print",
    "pause",
    "notification",
    "download",
    "arrow-left",
    "cancel",
    "euro-light",
    "setup",
    "warehouse",
    "search",
    "minus",
    "register",
    "stock-transfer",
    "edit",
    "user-management",
    "image",
    "question-mark",
    "settings",
    "receipt-2",
    "retrieve",
    "dinar",
    "australia",
    "date",
    "tick",
    "variant",
    "clear",
    "icon-park-solid-success",
    "percentage",
    "euro-thick",
    "sub-category",
    "increase",
    "decrease",
    "chevron-down",
    "delivery-2",
    "menu",
    "point-of-sale-1",
    "clock",
    "loyalty",
    "discount",
    "point-of-sale-2",
    "import",
    "receipt-1",
    "chevron-up",
    "password-2",
    "dashboard",
    "export-2",
    "united-kingdom",
    "hand-click",
    "delete",
    "excel",
    "payment-card",
    "inventory",
    "calculator",
    "dollar",
    "filter",
    "sell",
    "reports",
    "pound",
    "user",
    "nigeria-flag",
    "delivery-1",
    "naira",
    "required",
    "manage",
    "afghani",
    "add",
    "information",
    "password",
  ]),
  iconIncrease: PropTypes.string,
  iconDecrease: PropTypes.string,
};
