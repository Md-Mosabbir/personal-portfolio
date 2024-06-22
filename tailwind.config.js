// eslint-disable-next-line no-unused-vars
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      neutralBlack: '#000',
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
    extend: {
      screens: {
        '3xl': '1630px',
        xs: '450px',
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
