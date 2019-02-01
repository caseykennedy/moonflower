import config from '../theme/config'
import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

// Transat Light
import transatTextLightEot from './fonts/TransatTextLight.eot'
import transatTextLightWoff2 from './fonts/TransatTextLight.woff2'
import transatTextLightWoff from './fonts/TransatTextLight.woff'
import transatTextLightOtf from './fonts/TransatTextLight.otf'
import transatTextLightSvg from './fonts/TransatTextLight.svg'

// Transat Medium
import transatTextMediumEot from './fonts/TransatTextMedium.eot'
import transatTextMediumWoff2 from './fonts/TransatTextMedium.woff2'
import transatTextMediumWoff from './fonts/TransatTextMedium.woff'
import transatTextMediumOtf from './fonts/TransatTextMedium.otf'
import transatTextMediumSvg from './fonts/TransatTextMedium.svg'

// Transat Standard
import transatTextStandardEot from './fonts/TransatTextStandard.eot'
import transatTextStandardWoff2 from './fonts/TransatTextStandard.woff2'
import transatTextStandardWoff from './fonts/TransatTextStandard.woff'
import transatTextStandardOtf from './fonts/TransatTextStandard.otf'
import transatTextStandardSvg from './fonts/TransatTextStandard.svg'

// Transat Bold
import transatTextBoldEot from './fonts/TransatTextBold.eot'
import transatTextBoldWoff2 from './fonts/TransatTextBold.woff2'
import transatTextBoldWoff from './fonts/TransatTextBold.woff'
import transatTextBoldOtf from './fonts/TransatTextBold.otf'
import transatTextBoldSvg from './fonts/TransatTextBold.svg'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Transat';
    src: url('${transatTextLightEot}');
    src: url('${transatTextLightWoff2}') format('woff2'),
        url('${transatTextLightWoff}') format('woff'),
        url('${transatTextLightOtf}') format('opentype'),
        url('${transatTextLightEot}?#iefix') format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Transat';
    src: url('${transatTextStandardEot}');
    src: url('${transatTextStandardWoff2}') format('woff2'),
        url('${transatTextStandardWoff}') format('woff'),
        url('${transatTextStandardOtf}') format('opentype'),
        url('${transatTextStandardEot}?#iefix') format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Transat';
    src: url('${transatTextMediumEot}');
    src: url('${transatTextMediumWoff2}') format('woff2'),
        url('${transatTextMediumWoff}') format('woff'),
        url('${transatTextMediumOtf}') format('opentype'),
        url('${transatTextMediumEot}?#iefix') format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Transat';
    src: url('${transatTextBoldEot}');
    src: url('${transatTextBoldWoff2}') format('woff2'),
        url('${transatTextBoldWoff}') format('woff'),
        url('${transatTextBoldOtf}') format('opentype'),
        url('${transatTextBoldEot}?#iefix') format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* //meyerweb.com/eric/tools/css/reset/
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
  /* @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  } */
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
    background: #161623;
    font-size: 10px;
    font-family: 'Transat', sans-serif;
    letter-spacing: 0rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    line-height: 1.1;
    overflow-x: hidden;
    color: ${config.colors.pulse};
  }

  strong {
    font-weight: 500;
  }

  h1, h2, h3 {
    padding-bottom: 0.4em;
    font-weight: 400;
  }

  h4, h5, h6 {
    padding-bottom: 0.8em
  }

  h1 {
    font-size: 8rem;
    line-height: 1.1
  }
  h2 {
    font-size: 6rem;
    line-height: 1.2
  }
  h3 {
    font-size: 4rem;
    line-height: 1.2
  }
  h4 {
    font-size: 3rem;
    line-height: 1.2
  }
  h5 {
    font-size: 2rem;
    line-height: 1.1
  }
  h6 {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    line-height: 1.1;
    font-weight: 600;
  }

  p {
    font-size: 2.4rem;
    font-family: 'Transat', sans-serif;
    font-weight: 400;
    line-height: 1.2;
    /* padding-bottom: 2.6em; */
  }

  a { color: ${config.colors.pulse}; transition: all 0.2s ease; }


  /* Blaze iFrame Style Overrides */

  .RetailConnect-cardProducts {
    box-shadow: none !important;
  }

  .Button--default,
  .button {
    text-shadow: none;
    border-radius: 300px;
    border-width: 1px;
    font-weight: 300;
    text-transform: none;
    font-size: 14px !important;
    letter-spacing: 0.2rem;
  }

  .RetailConnect-brandingHome ul li a {
    text-shadow: none;
  }

  .FormField .FormInput {
    border-radius: 300px;
    padding: 2rem 2rem;
  }

  .RetailConnect-brancdingHome ul li,
  a,
  li {
    font-weight: 400;
  }

  .themeBgColor {
    background-color: #202136 !important;
  }

  .themeFontColor,
  .themeBorderColor {
    color: #202136 !important;
    border-color: #d7ddf7 !important;
  }

  .branding-home {
    padding: 4rem 1rem;
    border: none;
    background: #e9edfb;
  }

  .branding-home ul li a {
    font-size: 18px;
  }

  .tabs-button.active {
    color: #ffffff !important;
  }

  .show-all {
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: 20px;
    padding: 30px 20px;
    transition: all 0.2s ease-in;
    font-size: 18px;
  }

  a {
    transition: all 0.2s ease-in;
  }

  .RetailConnect-cardProducts .Card h4 {
    letter-spacing: 0;
    margin: 0 0 30px;
    font-size: 20px;
    line-height: 1.3;
    color: #260e4a !important;
  }

  .RetailConnect-cardProducts .Card span {
    display: block;
    padding-top: 30px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .RetailConnect-cardProducts .Card {
    text-align: left;
    padding: 0em;
    box-shadow: none;
    margin: 20px 0 0;
  }

  .categoryHeading h2 {
    color: #260e4a;
    font-weight: 300;
    font-size: 40px;
  }
  
`
export default GlobalStyle
