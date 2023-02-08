/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   primary: ['IBM Plex Serif', 'serif'],
      // },
      screens: {
        '2xl': '1500px',
        '3xl': '1700px',
        'short': { 'raw': '(max-height: 400px)' },
        '2alice': '900px',
      },
      colors: {
        'primary': {
          50: '#fbf5eb',
          100: '#f2e0c2',
          200: '#eacc9a',
          300: '#e2b771',
          400: '#d9a248',
          500: '#d59834',
          600: '#b77a37',
          700: '#6e4921',
          800: '#372510',
          900: '#120c05',
        },
        'secondary': {
          400: '#373737',
          500: '#212121',
          600: '#1a1a1a',
          700: '#141414',
          800: '#0d0d0d',
          900: '#030303'
        }
      },
    },
  },
  plugins: [],
}