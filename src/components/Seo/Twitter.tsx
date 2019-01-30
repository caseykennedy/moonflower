import * as React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

interface Props {
  type: string
  username: string
  title: string
  desc: string
  image: string
}

const Twitter = ({ type, username, title, desc, image }: Props) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={username} />}
    <meta name='twitter:card' content={type} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={desc} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:image:alt' content={desc} />
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
}