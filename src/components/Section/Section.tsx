import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import theme from '../../theme/theme'

interface Props {
  bg?: string
  px?: any
  py?: any
  pageWidth?: number | string
}

const Section: React.SFC<Props> = ({ children, bg, px, py, pageWidth }) => (
  <Flex
    as='section'
    flexWrap='wrap'
    flexDirection='row'
    justifyContent='flex-start'
    bg={bg}
    px={px}
    py={py}
    css={{
      maxWidth: theme.widths.max
    }}
  >
    <Box width={pageWidth}>{children}</Box>
  </Flex>
)

Section.defaultProps = {
  bg: '',
  px: [1, 3, 4, 4],
  py: [1, 3, 4, 4],
  pageWidth: '100%'
}

const PageWidth = styled(Box)`
  width: ${p => p.pageWidth}px;
  /* margin: 0 auto; */
`

export default Section
