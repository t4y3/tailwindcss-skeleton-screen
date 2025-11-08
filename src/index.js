import plugin from "tailwindcss/plugin";

export default plugin(({matchUtilities}) => {
    matchUtilities({
        "ss-text": (raw) => {
            const rows = [];
            const rowItems = raw.split("/");

            rowItems.forEach((item) => {
                const length = Number(item.trim());
                // Unicode escape sequences joined by full-width spaces
                rows.push(
                    Array.from({length})
                        .map((_) => `\\3000`)
                        .join("")
                );
            });
            // Unicode escape sequences joined by newlines
            const content = rows.join(`\\A`);
            return {
                "&:empty:before": {
                    "--tw-content": `"${content}"`
                },
            };
        },
    });
});