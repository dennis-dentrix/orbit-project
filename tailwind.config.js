import tailwindcss from "@tailwindcss/vite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a25b3c",
        secondary: "#5b7c99",
        tertiary: "#d9a066",
        accent: "#8e7cc3",

        background: "#f5f3ef",
        offWhite: "#edeae4",
        border: "#d1cfcb",

        text: "#2c2c2c",
        textSecondary: "#5a5a5a",
        textTertiary: "#8a8a8a",

        success: "#4caf50",
        error: "#c0392b",
        warning: "#e6b800",
        info: "#2980b9",
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [tailwindcss()],
};
