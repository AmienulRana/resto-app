/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-c-100": "#E5E5E5",
        "gray-c-200": "#8D92A3",
        "orange-c-100": "#FFC700",
      },
    },
  },
  plugins: [],
};
