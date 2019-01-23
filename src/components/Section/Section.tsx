import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import theme from '../../theme/theme'

interface Props {
  bg?: string
  bgImage?: string
  px?: any
  py?: any
  pageWidth?: number | string
}

const Section: React.SFC<Props> = ({
  children,
  bg,
  bgImage,
  px,
  py,
  pageWidth
}) => (
  <FlexBox
    as='section'
    flexWrap='wrap'
    flexDirection='row'
    justifyContent='flex-start'
    bg={bg}
    bgImage={bgImage}
    px={px}
    py={py}
  >
    <Box
      css={{
        maxWidth: pageWidth
      }}
    >
      {children}
    </Box>
  </FlexBox>
)

Section.defaultProps = {
  bg: '',
  px: [2, 3, 4, 4],
  py: [2, 3, 4, 4],
  pageWidth: '100%'
}

const FlexBox = styled(Box)`
  background-image: url('${(p: Props) => p.bgImage}');
  background-size: cover;
  background-position: bottom left;
`

const PageWidth = styled(Box)`
  width: ${p => p.pageWidth}px;
  /* margin: 0 auto; */
`

export default Section
