/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConcreteComponentNode = ({ icons, iconsImportClassName }) => {
  return (
    <>
      {(icons === "add" ||
        icons === "analytics" ||
        icons === "arrow-right" ||
        icons === "assets" ||
        icons === "cancel" ||
        icons === "chevron-down" ||
        icons === "chevron-left" ||
        icons === "chevron-right" ||
        icons === "chevron-up" ||
        icons === "community" ||
        icons === "dark" ||
        icons === "dashboard" ||
        icons === "date" ||
        icons === "delete" ||
        icons === "dollar" ||
        icons === "drag" ||
        icons === "edit" ||
        icons === "ellipse" ||
        icons === "export" ||
        icons === "factory" ||
        icons === "filter" ||
        icons === "globe" ||
        icons === "google" ||
        icons === "import" ||
        icons === "info" ||
        icons === "inventory" ||
        icons === "light" ||
        icons === "link" ||
        icons === "menu" ||
        icons === "notification" ||
        icons === "person" ||
        icons === "reports" ||
        icons === "search" ||
        icons === "settings" ||
        icons === "support" ||
        icons === "upgrade") && (
        <img
          className={`concrete-component-node icons-import icons-0-${icons} ${iconsImportClassName}`}
          alt="Icons import"
          src={
            icons === "export"
              ? "/img/icons-export.png"
              : icons === "menu"
                ? "/img/icons-menu.png"
                : icons === "person"
                  ? "/img/icons-person.png"
                  : icons === "factory"
                    ? "/img/icons-factory.png"
                    : icons === "date"
                      ? "/img/icons-date.png"
                      : icons === "drag"
                        ? "/img/icons-drag.png"
                        : icons === "filter"
                          ? "/img/icons-filter.png"
                          : icons === "notification"
                            ? "/img/icons-notification.png"
                            : icons === "chevron-right"
                              ? "/img/icons-chevron-right.png"
                              : icons === "chevron-left"
                                ? "/img/icons-chevron-left.png"
                                : icons === "chevron-up"
                                  ? "/img/icons-chevron-up.png"
                                  : icons === "community"
                                    ? "/img/icons-community.png"
                                    : icons === "assets"
                                      ? "/img/icons-assets.png"
                                      : icons === "cancel"
                                        ? "/img/icons-cancel.png"
                                        : icons === "globe"
                                          ? "/img/icons-globe.png"
                                          : icons === "info"
                                            ? "/img/icons-info.png"
                                            : icons === "google"
                                              ? "/img/icons-google.png"
                                              : icons === "dollar"
                                                ? "/img/icons-dollar.png"
                                                : icons === "link"
                                                  ? "/img/icons-link.png"
                                                  : icons === "upgrade"
                                                    ? "/img/icons-upgrade.png"
                                                    : icons === "analytics"
                                                      ? "/img/icons-analytics.png"
                                                      : icons === "reports"
                                                        ? "/img/icons-reports.png"
                                                        : icons === "settings"
                                                          ? "/img/icons-settings.png"
                                                          : icons === "support"
                                                            ? "/img/icons-support.png"
                                                            : icons ===
                                                                "ellipse"
                                                              ? "/img/icons-ellipse.png"
                                                              : icons ===
                                                                  "arrow-right"
                                                                ? "/img/icons-arrow-right.png"
                                                                : icons ===
                                                                    "light"
                                                                  ? "/img/icons-light.png"
                                                                  : icons ===
                                                                      "dark"
                                                                    ? "/img/icons-dark.png"
                                                                    : icons ===
                                                                        "dashboard"
                                                                      ? "/img/icons-dashboard.png"
                                                                      : icons ===
                                                                          "inventory"
                                                                        ? "/img/icons-inventory.png"
                                                                        : icons ===
                                                                            "chevron-down"
                                                                          ? "/img/icons-chevron-down.png"
                                                                          : icons ===
                                                                              "edit"
                                                                            ? "/img/icons-edit.png"
                                                                            : icons ===
                                                                                "delete"
                                                                              ? "/img/icons-delete.png"
                                                                              : icons ===
                                                                                  "search"
                                                                                ? "/img/icons-search.png"
                                                                                : icons ===
                                                                                    "add"
                                                                                  ? "/img/icons-add.png"
                                                                                  : "/img/icons-import.png"
          }
        />
      )}

      {(icons === "activity" ||
        icons === "asterics" ||
        icons === "columns" ||
        icons === "emoji-waving-hand" ||
        icons === "filter-2" ||
        icons === "good" ||
        icons === "naira") && (
        <div
          className={`concrete-component-node icons-activity icons-1-${icons} ${iconsImportClassName}`}
        >
          {icons === "filter-2" && (
            <>
              <img className="line" alt="Line" src="/img/line-20.png" />

              <img className="line-2" alt="Line" src="/img/line-21.png" />

              <img className="line-3" alt="Line" src="/img/line-22.png" />
            </>
          )}

          {icons === "columns" && (
            <>
              <img className="line-4" alt="Line" src="/img/line-19.png" />

              <img className="line-5" alt="Line" src="/img/line-19.png" />
            </>
          )}

          {icons === "emoji-waving-hand" && (
            <div className="overlap-group-15">
              <img className="vector-27" alt="Vector" src="/img/vector.png" />

              <img className="vector-28" alt="Vector" src="/img/vector-1.png" />

              <img className="vector-29" alt="Vector" src="/img/vector-2.png" />

              <img className="vector-30" alt="Vector" src="/img/vector-3.png" />

              <img className="vector-31" alt="Vector" src="/img/vector-4.png" />

              <img className="vector-32" alt="Vector" src="/img/vector-5.png" />

              <img className="vector-33" alt="Vector" src="/img/vector-6.png" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  icons: PropTypes.oneOf([
    "dashboard",
    "activity",
    "info",
    "asterics",
    "chevron-left",
    "emoji-waving-hand",
    "delete",
    "date",
    "inventory",
    "columns",
    "good",
    "person",
    "dollar",
    "link",
    "analytics",
    "filter",
    "chevron-right",
    "notification",
    "reports",
    "cancel",
    "factory",
    "arrow-right",
    "drag",
    "search",
    "filter-2",
    "upgrade",
    "naira",
    "chevron-down",
    "google",
    "assets",
    "menu",
    "light",
    "dark",
    "community",
    "add",
    "export",
    "edit",
    "import",
    "ellipse",
    "settings",
    "chevron-up",
    "globe",
    "support",
  ]),
};
