/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        "light_blue": "#212ea0",
        "primary_blur": "#000f38",
        "nav_blue": "#0e1235",
        "lightText": "#676767",
        "line": "#747474",
        "contact": "#000f38",
        "primaryBtn": "#212121",
        "btn": "#3819e6",
        "formColor": "#ebecfe"
      },
      backgroundImage: {
        "hero-img": "url('/src/assets/gallery/hero.jpg')",
      },
      fontSize: {
        fontSm: "1rem"
      },
      borderRadius: {
        br: "10px"
      }
    },
  },
  plugins: [],
}

