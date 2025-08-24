import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,

  argTypes: {
    icons: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icons: "dashboard",
    iconsImportClassName: {},
  },
};
