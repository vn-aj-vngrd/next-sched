/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    darkMode: "class",
    extend: {
      colors: {
        brightRed: "hsl(12, 88% 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSuplight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 38%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(223, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
