const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem'
      }
    }
  }
}
