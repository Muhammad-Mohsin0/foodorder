/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "830px",
      xlg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
