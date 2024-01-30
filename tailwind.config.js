/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': [ 'Roboto' ]
      },
      fontSize: {
        '2xl': [ '1.5rem', '2.25' ],
        '3xl': [ '2rem', '2.25rem' ],
        '5xl': [ '2.5rem', '3rem' ]
      }
    },
  },
  plugins: [],
}

