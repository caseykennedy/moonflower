import * as React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

interface Props {
  type?: string
  username?: string
  title?: string
  desc?: string
  image?: string
  locale?: string
  name?: string
  url?: string
}

const Facebook = ({ url, name, type, title, desc, image, locale }: Props) => (
  <Helmet>
    {name && <meta property='og:site_name' content={name} />}
    <meta property='og:locale' content={locale} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
    <meta property='og:image:alt' content={desc} />
  </Helmet>
)

export default Facebook

Facebook.defaultProps = {
  type: 'website',
  name: null,
}