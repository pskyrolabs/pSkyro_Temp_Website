/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skyro: "#2400C2",   // primary brand, key highlights
        launch: "#FFF500",  // accent, emphasis, callouts
        studio: "#000000",  // typography, strong contrast
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        // sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536 are Tailwind defaults.
        // Added for the 1536 → 3500px ultrawide range:
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3200px",
      },
      maxWidth: {
        // caps content so it doesn't over-stretch on ultrawide displays
        site: "1500px",
        "site-wide": "1760px",
      },
    },
  },
  plugins: [],
};
