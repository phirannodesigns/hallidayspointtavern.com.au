/* eslint-disable global-require, import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#2c3239',
        },
        cream: '#f5e7b8',
        olive: '#929e64',
        teal: {
          DEFAULT: '#486c6d',
        },
        blue: {
          DEFAULT: '#087db0',
          light: '#30a6cc',
          lightest: '#9dcbe4',
        },
      },
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
