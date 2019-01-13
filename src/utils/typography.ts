import Typography from 'typography'
import config from '../theme/config'

const typography = new Typography({
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.66,
  scaleRatio: 3,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  headerWeight: 400,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['400']
    },
    {
      name: config.bodyFontFamily,
      styles: ['400']
    }
  ]
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography