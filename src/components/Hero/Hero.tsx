import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'

import bgImage from './assets/bgBridge.jpg'

interface HeroProps {
  children: any
}

const Hero: React.SFC<HeroProps> = ({ children }) => (
  <Container
    pt={[120, 120, 120, 120]}
    pb={[200, 0, 0, 80]}
    px={[2, 3, 4, 4]}
  >
    <FlexBox
      justifyContent={['center', 'flex-start']}
    >
      <Box width={[ 1, 5/8 ]}>
        {children}
      </Box>
    </FlexBox>
  </Container>
)

Hero.defaultProps = {}

const FlexBox = styled(Flex)`
  max-width: ${p => p.theme.widths.max}px;
  text-align: center;

  ${up('0')} {
    text-align: left;
  }
`

const Container = styled(Flex)`
  background-color: ${p => p.theme.colors.superNova};
  background-image: url('https://res.cloudinary.com/moonflower/image/upload/v1548095489/bg-bridge-2.jpg');
  background-size: cover;
  min-height: 100%;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  ${between('0', '1')} {
    min-height: 80vh;
  }
  ${between('1', '2')} {
    min-height: 86vh;
  }
  ${up('2')} {
    min-height: 80vh;
  }
`

export default Hero
