/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary : "#0047af",
          secondary : "#0264f3",
          textColor : "#1A202C",
          textGray : "#1A202CA3",
      }
    },
  },
  plugins: [],
}

