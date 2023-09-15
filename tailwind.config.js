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
          25: '#fefbf3',
          50: '#fdf6e6',
          100: '#fbedcc',
          200: '#f7dc99',
          300: '#f4ca67',
          400: '#f0b934',
          500: '#eca701',
          600: '#bd8601',
          700: '#8e6401',
          800: '#5e4300',
          900: '#2f2100',
          white: '#ffffff',
          nzumodra: '#006fb9',
          nzuzelena: '#2cb34a',
          nzuzluta: '#bfd22b'
          // 50: '#f5ede9',
          // 100: '#ebdbd3',
          // 200: '#cda590',
          // 300: '#b88064',
          // 400: '#a45c37',
          // 500: '#9a4a21',
          // 600: '#8b431e',
          // 700: '#6c3417',
          // 800: '#3e1e0d',
          // 900: '#1f0f07',
        },
        animation: {
          'fade-in': 'fadeIn 2s ease-in-out', // Define the fade-in animation
        },
      },
    },
  },
  plugins: [],
}