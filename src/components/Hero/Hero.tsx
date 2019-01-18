import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'

interface HeroProps {
  children: any
}

const Hero: React.SFC<HeroProps> = ({ children }) => (
  <Container
    bg='purpleRain'
    pt={[220, 160, 160, 160]}
    pb={[140, 100, 100, 200]}
    px={[2, 3, 4, 4]}
  >
    <FlexBox
      justifyContent={['center', 'flex-start']}
      width={1}
      mx='auto'
    >
      <Box width={[ 7/8, 3/4, 3/5, 5/12 ]}>
        {children}
      </Box>
    </FlexBox>
  </Container>
)

Hero.defaultProps = {}

const FlexBox = styled(Flex)`
  max-width: 1366px;
  text-align: center;

  ${up('0')} {
    text-align: left;
  }
`

const Container = styled(Flex)`

  min-height: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  ${between('0', '1')} {
    min-height: 70vh;
  }
  ${between('1', '2')} {
    min-height: 70vh;
  }
  ${up('2')} {
    min-height: 100vh;
  }
`

export default Hero
