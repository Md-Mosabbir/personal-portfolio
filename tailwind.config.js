/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutralBlack: '#131703',
      neutralWhite: '#FFFFFF',
      primary: '#BEE425',
      secondary: '#B7DE1B',
      accent: '#F0F9CD',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      '7xl': '5.8125rem',
      '5xl': '3.625rem',
      '2xl': '2.5rem',
      xl: '30px',
      base: '1.5625rem',
      'inter-bold': '1.5625rem',
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    extend: {},
  },
  plugins: [],
}
