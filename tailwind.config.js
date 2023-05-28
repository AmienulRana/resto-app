/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-c-100": "#FAFAFC",
        "gray-c-200": "#8D92A3",
        "gray-c-300": "#E2E2E2",
        "orange-c-100": "#FFC700",
      },
      minWidth: {
        '48': '200px',
      }
    },
  },
  plugins: [],
}
