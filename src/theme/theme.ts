import Config from './config'

const theme = {
  // Rebass theme options

  breakpoints: [
    `${Config.Breakpoint.Sm}px`,
    `${Config.Breakpoint.Md}px`,
    `${Config.Breakpoint.Lg}px`,
    `${Config.Breakpoint.Xl}px`,
  ],

  fonts: {
    transatLight:          'TransatLight, sans-serif',
    transatStandard:       'TransatStandard, sans-serif',
    transatMedium:         'TransatMedium, sans-serif',
    transatBold:           'TransatBold, sans-serif'
  },

  Heading: {
    fontWeight: 'normal'
  },

  fontSizes: [
    '1em',
    '1.4em',
    '1.6em',
    '1.8em',
    '2em',
    '2.4rem',
    '2.8em',
    '3em'
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
    Black: `${Config.Color.Black}`,
    White: `${Config.Color.White}`,
    LightGrey: `${Config.Color.LightGrey}`,
    DarkGrey: `${Config.Color.DarkGrey}`,

    DarkSky: `${Config.Color.DarkSky}`,
    PurpleRain: `${Config.Color.PurpleRain}`,
    OgPurp: `${Config.Color.OgPurp}`,
    Lavendar: `${Config.Color.Lavendar}`,
    GoldBloom: `${Config.Color.GoldBloom}`,
    PaleMoon: `${Config.Color.PaleMoon}`
  },

  widths: {
    maxWidth: '1366px',
    maxWidthCentered: '650px'
  }
}

export default theme
