/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
  ],
    theme: {
    extend: {
      colors: {
        'neutralSolver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'blue': '#1565c0',
        'neutralGrey': '#F5F7FA',
      },
    },
  },
  plugins: [],
}

