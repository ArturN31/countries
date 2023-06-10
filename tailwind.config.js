/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'dark': '#121113',
      'orange-peel': '#FFA62B',
      'beige': '#E4E6C3',
      'paynes-gray': '#19647E',
      'white': '#fff'
    },
    extend: {
      fontFamily: {
        'ruslan': ['"Ruslan Display"', 'cursive'],
        'titillium': ['"Titillium Web"', 'sans-serif']
      }
    }
  }
}

