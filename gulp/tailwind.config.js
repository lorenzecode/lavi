const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['../src/**/*.html'],
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
        whatsapp: {
          50: '#f6fcf6',
          100: '#edf9ed',
          200: '#d3f0d1',
          300: '#b8e7b5',
          400: '#82d47e',
          500: '#4dc247',
          600: '#45af40',
          700: '#3a9235',
          800: '#2e742b',
          900: '#265f23',
        },
      },
      gridColumnStart: {
        14: '14',
        15: '15',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        'max-2xl-12':
          'calc(50% - calc(theme("screens.2xl") / 2)) repeat(12, minmax(0, 1fr)) calc(50% - calc(theme("screens.2xl") / 2));',
        'max-xl-12':
          'calc(50% - calc(theme("screens.xl") / 2)) repeat(12, minmax(0, 1fr)) calc(50% - calc(theme("screens.xl") / 2));',
      },
      maxWidth: {
        '2/10': '80%',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
