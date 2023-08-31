/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        dark: '#292d34',
        primary: '#407bff',
        secondary: '#ff6b6b',
        tertiary: '#7bc678',
        quaternary: '#f2994a',
        gray: {
          default: '#828282',
          soft: '#f2f2f2'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
