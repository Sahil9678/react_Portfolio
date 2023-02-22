/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // dropShadow: {
      //   '3xl': '100px 100px 500px black'
      // },
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}
