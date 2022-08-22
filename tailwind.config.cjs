/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
