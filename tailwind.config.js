/* eslint-disable global-require, import/no-extraneous-dependencies, sonarjs/no-duplicate-string */
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
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.white')
              },
            },
            'h2, h3, h4': {
              color: theme('colors.white'),
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.white') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.white') }
              }
            },
            strong: { color: theme('colors.white') },
          }
        }
      })
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
