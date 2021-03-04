const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false,
  // corePlugins: {
  //   container: false,
  // },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      quick: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        'rose-gold': {
          50: '#fbf8f8',
          100: '#f8f1f2',
          200: '#eddbde',
          300: '#e2c5c9',
          400: '#cd9aa1',
          500: '#b76e79',
          600: '#a5636d',
          700: '#89535b',
          800: '#6e4249',
          900: '#5a363b',
        },
      },
      gridColumnStart: {
        14: '14',
        15: '15',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        'max-12':
          'calc(50% - calc(theme("screens.2xl") / 2)) repeat(12, minmax(0, 1fr)) calc(50% - calc(theme("screens.2xl") / 2));',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
    },
  },
  plugins: [],
};
