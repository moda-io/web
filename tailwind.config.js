/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F3EF",
        ink: "#111111",
        charcoal: "#161616",
        muted: "#6B6B66",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
        logo: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
