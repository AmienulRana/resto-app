/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-c-100": "#FAFAFC",
        "gray-c-200": "#8D92A3",
        "gray-c-300": "#E2E2E2",
        "orange-c-100": "#FFC700",
      },
    },
  },
  plugins: [],
};
