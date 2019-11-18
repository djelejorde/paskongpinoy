/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      green: '#56a753',
      blue: '#354da1',
      red: '#cc3c49',
      yellow: '#f9bb31',
      orange: '#ee662c',
      gray: {
        '100': '#d6d6d6',
        '200': '#909090',
        '400': '#726f72' 
      }
    },
    fontFamily: {
      tob: '"ThinkingOfBetty, serif"'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    maxHeight: theme => ({
      ...theme('spacing')
    }),
    extend: {
    }
  },
  variants: {},
  plugins: []
}
