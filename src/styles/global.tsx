import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'TransatMedium';
    src: url('TransatTextMedium.eot');
    src: url('TransatTextMedium.woff2') format('woff2'),
        url('TransatTextMedium.woff') format('woff'),
        url('TransatTextMedium.ttf') format('truetype'),
        url('TransatTextMedium.otf') format('opentype'),
        url('TransatTextMedium.svg#TransatTextMedium') format('svg'),
        url('TransatTextMedium.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TransatStandard';
    src: url('TransatTextStandard.eot');
    src: url('TransatTextStandard.woff2') format('woff2'),
        url('TransatTextStandard.woff') format('woff'),
        url('TransatTextStandard.ttf') format('truetype'),
        url('TransatTextStandard.otf') format('opentype'),
        url('TransatTextStandard.svg#TransatTextMedium') format('svg'),
        url('TransatTextStandard.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

@font-face {
  font-family: 'TransatBold';
  src: url('TransatTextBold.eot');
  src: url('TransatTextBold.woff2') format('woff2'),
      url('TransatTextBold.woff') format('woff'),
      url('TransatTextBold.ttf') format('truetype'),
      url('TransatTextBold.otf') format('opentype'),
      url('TransatTextBold.svg#TransatTextMedium') format('svg'),
      url('TransatTextBold.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'TransatLight';
  src: url('TransatTextLight.eot');
  src: url('TransatTextLight.woff2') format('woff2'),
      url('TransatTextLight.woff') format('woff'),
      url('TransatTextLight.ttf') format('truetype'),
      url('TransatTextLight.otf') format('opentype'),
      url('TransatTextLight.svg#TransatTextMedium') format('svg'),
      url('TransatTextLight.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

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

  html,
  body {
    font-size: 10px;
    font-family: TransatStandard;
    letter-spacing: 0.1rem;
  }

  h1, h2, h3 {
    padding-bottom: 0.4em
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
    line-height: 1.1
  }
  h3 {
    font-size: 4rem;
    line-height: 1.1
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

  a { transition: all 0.2s; }
  
`
export default GlobalStyle
