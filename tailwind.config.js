/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      ubunto : ['Ubuntu', "sans-serif"],
      Poppins:["Poppins", "ubunto"],
      salsa:["Salsa"],
      Rubik:["Rubik Glitch"]
    },
    extend: {
      screens:{
        "usm": "430px"
      },
      backgroundImage:{
        "profileBG":"url('./src/assets/Images/BS.jpg')",
      },
    },
  },
  plugins: [],
}

