import config from './config'
import { lighten } from 'polished'

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
    transat: '"Transat", sans-serif',
  },

  Heading: {
    fontWeight: 'normal'
  },

  Link: {
    color: config.colors.pulse,
    cursor: 'pointer',
    transition: 'all 0.3s eas-in',

    '&:hover': {
      color: config.colors.goldBloom,
      borderBottom: 'none'
    }
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
    black: config.colors.black,
    white: config.colors.white,
    gray: config.colors.gray,
    lightGrey: config.colors.lightGray,
    darkGrey: config.colors.darkGray,

    darkSky: config.colors.darkSky,
    purpleRain: config.colors.purpleRain,
    pulse: config.colors.pulse,
    ogPurp: config.colors.ogPurp,
    lavendar: config.colors.lavendar,
    goldBloom: config.colors.goldBloom,
    paleMoon: config.colors.paleMoon,
    superNova: config.colors.superNova,
    spaceDust: config.colors.spaceDust,
    lunar: config.colors.lunar
  },

  widths: {
    max: config.maxWidth
  }
}

export default theme
