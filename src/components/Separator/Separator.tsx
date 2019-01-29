import * as React from 'react'
import { Box } from 'rebass'

interface Props {
  bg?: string
}

const Separator: React.SFC<Props> = ({ bg }) => (
  <Box bg={bg} css={{height: 1}} />
)

Separator.defaultProps = {
  bg: 'purpleRain'
}

export default Separator
