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
        'short': { 'raw': '(max-height: 400px)' }
      },
      colors: {
        'primary': {
          50: '#f5ede9',
          100: '#ebdbd3',
          200: '#cda590',
          300: '#b88064',
          400: '#a45c37',
          500: '#9a4a21',
          600: '#8b431e',
          700: '#6c3417',
          800: '#3e1e0d',
          900: '#1f0f07',
        }
      },
    },
  },
  plugins: [],
}