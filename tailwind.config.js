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
      // Rubik:["Rubik Glitch"]
    },
    extend: {
      screens: {
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px'},
      },
      backgroundImage:{
        "profileBG":"url('./src/assets/Images/BS.jpg')",
      },
    },
  },
  plugins: [],
}

