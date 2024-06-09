/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gr: ["gr", "sans-serif"],
        gm: ["./assets/GoogleSans-Medium.ttf", "sans-serif"],
      },
    },
  },
  plugins: [],
};
