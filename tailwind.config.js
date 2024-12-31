/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        "light_blue": "#212ea0",
        "primary_blur": "#000f38",
        "nav_blue": "#0e1235",
        // gradient: "linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url("../../assets / hero.jpg")"
        "line": "#747474",
        "contact": "#000f38"

      },
      backgroundImage: {
        "hero": "url()"
      }
    },
  },
  plugins: [],
}

