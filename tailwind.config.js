const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['GT-America-Extended', ...defaultTheme.fontFamily.sans],
      expanded: ['GT-America-Expanded', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem'
      },
      inset: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem'
      }
    }
  }
}
