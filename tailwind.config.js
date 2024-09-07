/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tranos-primary": "#172673",
      },
      screens: {
        less1200: "1200px",
        less1100: "1100px",
      },
    },
  },
  plugins: [],
};
