// COLOR SETUP
const PRIMARY = {
  dark: '#29282b',
  main: '#2d2e32',
  contrastText: '#6f7074',
};

const INFO = {
  light: '#70f9a8',
};

const COMMON = {
  primary: { ...PRIMARY },
  info: { ...INFO },
};

const palette = {
  dark: {
    ...COMMON,
    // might add more if needed
  }
}

export default palette;