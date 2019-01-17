import { createGlobalStyle } from 'styled-components'

// Transat Light
import transatTextLightEot from './static/transatTextLight.eot'
import transatTextLightWoff2 from './static/transatTextLight.woff2'
import transatTextLightWoff from './static/transatTextLight.woff'
import transatTextLightOtf from './static/transatTextLight.otf'
import transatTextLightSvg from './fonts/transatTextLight.svg'

// Transat Medium
import transatTextMediumEot from './static/TransatTextMedium.eot'
import transatTextMediumWoff2 from './static/TransatTextMedium.woff2'
import transatTextMediumWoff from './static/TransatTextMedium.woff'
import transatTextMediumOtf from './static/TransatTextMedium.otf'
import transatTextMediumSvg from './fonts/TransatTextMedium.svg'

// Transat Standard
import transatTextStandardEot from './static/TransatTextStandard.eot'
import transatTextStandardWoff2 from './static/TransatTextStandard.woff2'
import transatTextStandardWoff from './static/TransatTextStandard.woff'
import transatTextStandardOtf from './static/TransatTextStandard.otf'
import transatTextStandardSvg from './fonts/TransatTextStandard.svg'

// Transat Bold
import transatTextBoldEot from './static/transatTextBold.eot'
import transatTextBoldWoff2 from './static/transatTextBold.woff2'
import transatTextBoldWoff from './static/transatTextBold.woff'
import transatTextBoldOtf from './static/transatTextBold.otf'
import transatTextBoldSvg from './fonts/transatTextBold.svg'

const GlobalStyle = createGlobalStyle`

/* @font-face {
    font-family: 'TransatMedium';
    src: url(${transatTextMediumEot});
    src: url(${transatTextMediumWoff2}) format('woff2'),
        url(${transatTextMediumWoff}) format('woff'),
        url(${transatTextMediumOtf}) format('opentype'),
        url(${transatTextMediumEot}?#iefix) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TransatStandard';
    src: url(${transatTextStandardEot});
    src: url(${transatTextStandardWoff2}) format('woff2'),
        url(${transatTextStandardWoff}) format('woff'),
        url(${transatTextStandardOtf}) format('opentype'),
        url(${transatTextStandardEot}?#iefix) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TransatBold';
    src: url(${transatTextBoldEot});
    src: url(${transatTextBoldWoff2}) format('woff2'),
        url(${transatTextBoldWoff}) format('woff'),
        url(${transatTextBoldOtf}) format('opentype'),
        url(${transatTextBoldEot}?#iefix) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TransatLight';
    src: url(${transatTextLightEot});
    src: url(${transatTextLightWoff2}) format('woff2'),
        url(${transatTextLightWoff}) format('woff'),
        url(${transatTextLightOtf}) format('opentype'),
        url(${transatTextLightEot}?#iefix) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  } */

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }
  ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: white;
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  /* ••••••••••••••••••••••••••••••••••••••••••••••••••• */

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

  html,
  body {
    font-size: 10px;
    font-family: 'TransatStandard', sans-serif;
    letter-spacing: 0.1rem;
    text-rendering: optimizeLegibility;
    /* -webkit-font-smoothing: antialiased; */
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  h1, h2, h3 {
    letter-spacing: 0rem;
    padding-bottom: 0.4em
  }

  h4, h5, h6 {
    padding-bottom: 0.8em
  }

  h1 {
    font-size: 8rem;
    line-height: 1.3
  }
  h2 {
    font-size: 6rem;
    line-height: 1.3
  }
  h3 {
    font-size: 4rem;
    line-height: 1.3
  }
  h4 {
    font-size: 3rem;
    line-height: 1.1
  }
  h5 {
    font-size: 2rem;
    line-height: 1.1
  }
  h6 {
    font-size: 1.4rem;
    line-height: 1.1
  }

  p {
    font-size: 1.8rem;
    line-height: 1.8;
    font-family: TransatLight;
    padding-bottom: 2.6em;
  }

  a { transition: all 0.2s ease; }
  
`
export default GlobalStyle
