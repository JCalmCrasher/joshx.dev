module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: () => ({
      'primary': '#2d2e32',
      'secondary': '#29282b',
      'info': '#70f9a8'
    })
  },
  letterSpacing: {
    'wide': '.5em',
    'wider': '.9em'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
