/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,cjs,mjs,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010851",
        secondary: "#9a7af1",
        tartiary: "#707070",
        pink: "#ee9ae5",
      },
      boxShadow: { "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)" },
    },
  },
  plugins: [],
};
