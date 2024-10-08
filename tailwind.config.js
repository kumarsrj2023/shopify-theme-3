/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      height: {
        'h-94': '22rem'
      }
    },
  },
  plugins: [],
}

