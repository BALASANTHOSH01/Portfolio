/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      ubunto : ['Ubuntu', "sans-serif"],
      Rubik:["Rubik Glitch", "ubunto"],
      gooper:["Caprasimo"]
    },
    extend: {
      screens:{
        "usm": "430px"
      }
    },
  },
  plugins: [],
}

