const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem'
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem'
      }
    }
  }
}
