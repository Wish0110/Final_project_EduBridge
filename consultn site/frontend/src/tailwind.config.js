const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
    theme: {
    extend: {fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [],
}

