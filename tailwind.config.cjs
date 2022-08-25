/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        divideColor: "#424242",
        darkest: "#18191a",
        darker: "#242526",
        dark: "#3a3b3c",
        grey: "#fafafa",
        lighter: "#f7f7f7",
        light: "#eaeaea",
      },
    },
  },
  plugins: [],
};
