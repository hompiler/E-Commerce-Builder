/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./src/**/*"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "on-primary": "var(--color-on-primary)",
                background: "var(--color-background)",
                "on-background": "var(--color-on-background)",
                "on-background-unfocused":
                    "var(--color-on-background-unfocused)",
                "surface-variant": "var(--color-surface-variant)",
                "on-surface-variant": "var(--color-on-surface-variant)",
                surface: "var(--color-surface)",
                "on-surface": "var(--color-on-surface)",
                borders: "var(--color-borders)",
            },
        },
    },
    plugins: [],
};
