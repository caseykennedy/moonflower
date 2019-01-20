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
    pt={[220, 160, 160, 120]}
    pb={[140, 100, 160, 200]}
    px={[2, 3, 4, 4]}
  >
    <FlexBox
      justifyContent={['center', 'flex-start']}
      width={1}
    >
      <Box width={[ 7/8, 3/4, 3/5, 5/12 ]}>
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
  background-color: ${p => p.theme.colors.purpleRain};
  background-image: url('http://caseykennedy.me/bg-bridge-2.jpg');
  background-size: cover;
  min-height: 100%;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  ${between('0', '1')} {
    min-height: 70vh;
  }
  ${between('1', '2')} {
    min-height: 80vh;
  }
  ${up('2')} {
    min-height: 100vh;
  }
`

export default Hero
