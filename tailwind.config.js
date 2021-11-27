module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: () => ({
        'primary': '#6f7074',
        'secondary': '#29282b',
        'info': '#70f9a8',
        'main': '#e9eaea',
        'darkText':'rgb(198, 188, 188)'
      }),
      backgroundColor: () => ({
        'primary': '#2d2e32',
        'secondary': '#29282b',
        'info': '#70f9a8',
      })
    },
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
