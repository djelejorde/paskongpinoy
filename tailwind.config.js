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
      green: '#00a652',
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
      body: ['Quicksand', 'sans-serif'],
      tob: '"Thinking Of Betty"',
      bebas: '"BebasNeue"'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '7xl': '5rem',
      '7xl': '5rem',
      '8': '6rem',
      '9': '7rem',
      '10': '8rem',
      '11': '9rem',
    },
    maxHeight: theme => ({
      ...theme('spacing')
    }),
    maxWidth: theme => ({
      ...theme('spacing'),
      'initial': 'initial'
    }),
    extend: {
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'important']
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}
