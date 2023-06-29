/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const baseTypographyPlugins = plugin(function ({
    addBase,
    addUtilities,
    theme,
}) {
    const h1 = {
        fontSize: "64px",
        fontWeight: "600",
        lineHeight: "102px",
    };
    const h2 = {
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: "77px",
    };
    const h3 = {
        fontSize: "32px",
        fontWeight: "600",
        lineHeight: "51px",
    };

    const h4 = {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "39px",
    };

    const h5 = {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "32px",
    };

    const h6 = {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "26px",
    };

    const subtitle1 = {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "26px",
        letterSpacing: "0.56px",
    };
    const subtitle2 = {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "22px",
    };

    const buttonMid = {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "22px",
    };

    const body1 = {
        fontSize: "16px",
        lineHeight: "26px",
    };

    const body2 = {
        fontSize: "14px",
        lineHeight: "22px",
    };

    const caption = {
        fontSize: "12px",
        lineHeight: "19px",
    };

    const overline = {
        fontSize: "12px",
        lineHeight: "19px",
        letterSpacing: "1.2px",
        textTransform: "uppercase",
        fontWeight: "600",
    };
    addBase({
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p: body1,
    });
    addUtilities({
        ".h1": h1,
        ".h2": h2,
        ".h3": h3,
        ".h4": h4,
        ".h5": h5,
        ".h6": h6,
        ".subtitle1": subtitle1,
        ".subtitle2": subtitle2,
        ".body1": body1,
        ".body2": body2,
        ".button-md": buttonMid,
        ".caption": caption,
        ".overline": overline,
    });
});

const components = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".card": {
            padding: "56px 40px",
            borderRadius: theme("borderRadius.lg"),
            border: "1px solid var(--color-border)",
            boxShadow: "0px 1px 10px rgba(37, 122, 250, 0.2)",
            maxWidth: "882px",
        },
        ".icon-container": {
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            background: "transparent",
        },
        ".bordered": {
            border: "1px solid var(--color-border)",
        },
        ".bordered-bottom": {
            borderBottom: "1px solid var(--color-border)",
        },
        ".bordered-end": {
            borderInlineEnd: "1px solid var(--color-border)",
        },
        ".separator-vertical": {
            width: "1px",
            height: "100%",
            background:
                "radial-gradient(circle, var(--color-border) 0%, rgba(0,0,0,0) 90%)",
        },
        ".elevated": {
            zIndex: "10",
        },
        ".select-image-none": {
            "user-drag": "none",
            "-webkit-user-drag": "none",
            " user-select": "none",
            " -moz-user-select": "none",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
        },
        ".no-bullets": {
            "list-style-type": "none",
            padding: "0",
            margin: "0",
        },
    });
});

const iconsPlugin = plugin(function ({ matchVariant, matchUtilities, theme }) {
    matchUtilities(
        "size-",
        (value) => {
            return {
                width: value,
                height: value,
            };
        },
        { values: { ...theme("spacing") } }
    );
    matchUtilities(
        {
            "icon-col": (value) => ({
                fill: value,
                stroke: value,
            }),
        },
        {
            values: flattenColorPalette(theme("colors")),
            type: "color",
        }
    );
});

const bilingualPlugins = plugin(function ({
    addUtilities,
    matchVariant,
    theme,
}) {
    const values = {
        ...theme("spacing"),
        auto: "auto",
    };
    matchVariant(
        "ms-",
        (value) => {
            return {
                "margin-inline-start": value,
            };
        },
        { values }
    );
    matchVariant(
        "me-",
        (value) => {
            return {
                "margin-inline-end": value,
            };
        },
        {
            values,
        }
    );
    matchVariant(
        "ps-",
        (value) => {
            return {
                "padding-inline-start": value,
            };
        },
        {
            values,
        }
    );
    matchVariant(
        "pe-",
        (value) => {
            return {
                "padding-inline-end": value,
            };
        },
        {
            values,
        }
    );
});

const colorUtilities = plugin(function ({ addUtilities, theme }) {
    addUtilities({
        ".primary-container": {
            background: theme("colors.primary-container"),
            color: theme("colors.on-primary-container"),
            fill: theme("colors.on-primary-container"),
            stroke: theme("colors.on-primary-container"),
        },
    });
});

const flexUtils = plugin(function ({ addUtilities }) {
    addUtilities({
        ".centered": {
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
        },
        ".row": {
            display: "flex",
            "flex-direction": "row",
            "align-items": "center",
        },
        ".row-between": {
            display: "flex !important",
            "flex-direction": "row",
            "align-items": "center",
            "justify-content": "space-between",
        },
        ".column": {
            display: "flex",
            "flex-direction": "column",
        },
        ".column-center": {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
        },
    });
});

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: require("./config/tailwind/colors"),
            fontFamily: {
                sans: ["var(--font-poppins)"],
                mono: ["var(--font-poppins)"],
            },
            borderRadius: {
                none: "0",
                xs: "var(--rounded-xs)",
                sm: "var(--rounded-sm)",
                DEFAULT: "var(--rounded-sm)",
                md: "var(--rounded-md)",
                lg: "var(--rounded-lg)",
                full: "200px",
            },
            boxShadow: {
                container: "var(--shadow-container)",
                action: "var(--shadow-action)",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
        iconsPlugin,
        baseTypographyPlugins,
        components,
        bilingualPlugins,
        colorUtilities,
        flexUtils,
    ],
};
