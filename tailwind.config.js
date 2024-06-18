/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customWhite': '#eeeeee',
        'customBlue': '#0092ca',
        'customLightBlue': '#02b2f5',
        'customBlack': '#222831',
      }
    },
  },
  plugins: [],
}

