/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "raj": "Rajdhani",
        "roboto": "Roboto",
        "poppins": "Poppins",
      },
      colors: {
        "dark": "#111111",
        "primary":"#FFB703"
      }
    },
  },
  plugins: [],
};
