import config from './config'

const theme = {
  // Rebass theme options

  breakpoints: [
    `${config.breakpoints.sm}px`,
    `${config.breakpoints.md}px`,
    `${config.breakpoints.lg}px`,
    `${config.breakpoints.xl}px`
  ],

  // && {
  //   xs: 320,
  //   sm: 464,
  //   md: 1024,
  //   lg: 1367,
  //   xl: 1620
  // },

  fonts: {
    transat: 'Transat, sans-serif',
  },

  Heading: {
    fontWeight: 'normal'
  },

  fontSizes: [
    '1rem',
    '1.4rem',
    '1.6rem',
    '1.8rem',
    '2rem',
    '2.4rem',
    '2.8rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem'
  ],

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },

  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },

  space: [
    0,
    '1rem',
    '2rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem',
    '9rem',
    '10rem'
  ],

  colors: {
    black: `${config.colors.black}`,
    white: `${config.colors.white}`,
    lightGrey: `${config.colors.lightGrey}`,
    darkGrey: `${config.colors.darkGrey}`,

    darkSky: `${config.colors.darkSky}`,
    purpleRain: `${config.colors.purpleRain}`,
    ogPurp: `${config.colors.ogPurp}`,
    lavendar: `${config.colors.lavendar}`,
    goldBloom: `${config.colors.goldBloom}`,
    paleMoon: `${config.colors.paleMoon}`,
    superNova: `${config.colors.superNova}`
  },

  widths: {
    maxWidth: '1366px',
    maxWidthCentered: '650px'
  }
}

export default theme
