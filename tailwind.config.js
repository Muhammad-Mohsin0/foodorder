/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        // Define your custom background image
        "hero-pattern": "url('/src/assets/background1.jpg')", // Ensure the path to your image is correct
      },
    },
  },
  plugins: [],
};
