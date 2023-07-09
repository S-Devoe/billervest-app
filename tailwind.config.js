/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    
    colors: {
      main: "#230251",
      "dark-main": "#020710",
      yellow: "#FEA106",
      "primary-main": "#19013A",
      "primary-main2": "#048FF9",
      white: "#fff",
      "blue-text": "#00FBFF",
      "black-btn": "#1A1A1A",
      "blue-btn": "#048FF9",
      "yellow-main": "#FEA106",
      purple: "#7049F7",
      "grey-main": "#F5F2EA",
      "grey-text": "#808080",
    },
  },
  plugins: [],
};
