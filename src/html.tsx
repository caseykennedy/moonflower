/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

const config = require('../gatsby-config.js')
const sheet = new ServerStyleSheet()
const styles = sheet.getStyleTags()

interface HtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any
  styles: any
}

export default (props: HtmlProps) => {
  const head = Helmet.rewind()

  const verification =
    config.siteMetadata && config.siteMetadata.googleVerification ? (
      <meta
        name='google-site-verification'
        content={config.siteMetadata.googleVerification}
      />
    ) : null

  return (
    <html lang='en'>
      <head>
        {props.headComponents}
        <title>My website</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {verification}
        <style>{props.styles}</style>
      </head>
      <body>
        <div id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var blazeUrl='https://store.blaze.me';
              var apiKey="9d2cdd6ceec8480489da3fa91d0a34be";
              var script=document.createElement('script');script.src=blazeUrl+'/'+'widget.js';script.id='blazeIframeScript';script.setAttribute('blazeUrl',blazeUrl)
              script.setAttribute('apiKey',apiKey)
              document.head.appendChild(script);
            `
          }}
        />
      </body>
    </html>
  )
}
