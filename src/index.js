const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ matchUtilities, addUtilities, theme }) {
    matchUtilities({
      "ss-text": (value) => {
        const rows = [];
        const rowItems = value.split("/");
        rowItems.forEach((item) => {
          const length = Number(item.trim());
          // Unicode escape sequences joined by full-width spaces
          rows.push(
            Array.from({ length })
              .map((_) => `\\3000`)
              .join("")
          );
        });
        // Unicode escape sequences joined by newlines
        const content = rows.join(`\\A`);
        return {
          "&:empty:before": {
            content: `"${content}"`,
            "background-color": theme("skeletonScreen.color"),
            "white-space": "break-spaces",
            "word-break": "break-all",
          },
          "&.truncate:empty:before": {
            "white-space": "normal",
          },
        };
      },
    });
    addUtilities({
      ".ss-object:empty": {
        "background-color": theme("skeletonScreen.color"),
      },
    });
  },
  {
    theme: {
      extend: {
        skeletonScreen: {
          color: "#cbd5e1",
        },
      },
    },
  }
);
