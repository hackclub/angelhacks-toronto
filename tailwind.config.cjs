/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      teal: "#1F9AAA",
      "dark-blue": "#196694",
      turquoise: "#35CEBF",
      green: "#68D997",
      "light-green": "#C5E691",
      orange: "#FDB32B",
      "light-orange": "#FEDB8E",
      red: "#FA5D63",
      black: "#222222",
      "sky-blue": "#8EDDFD",
      "pale-blue": "#8492A5",
      "black-blue": "#3C4857",
      "pale-blue-2": "#6A798E",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        xs: { min: "512px" },
        "2xs": { min: "384px" },
      },
    },
  },
  plugins: [],
};
