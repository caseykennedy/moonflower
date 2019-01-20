import * as React from 'react'
import { Box, Flex, Text, Heading } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import Carousel from '../../components/Carousel'

import data from './data/slides.json'

interface IntroProps {
  children?: any
}

const Intro: React.SFC<IntroProps> = ({ children }) => (
  <Container bg='purpleRain'>
    <GridContainer mt={[ 0, 0, -8, -8 ]}>
      <FlexCol width={[ 1, 1, 1/2 ]} bg='superNova' p={[ 3, 3, 4 ]}>
        <Carousel data={data} />
      </FlexCol>
      <FlexCol width={[ 1, 1, 1/2 ]}>
        <Box width={1} bg='lavendar' css={{ height: '50%' }} p={[ 3, 3, 4 ]}>
          <Text fontSize={5}>
            Tab list
          </Text>
        </Box>
        <Box width={1/2} bg='goldBloom'  css={{ height: '50%' }} p={[ 3, 3, 4 ]}>
          <Text fontSize={5}>
            Tab list
          </Text>
        </Box>
        <Box width={1/2} bg='superNova'  css={{ height: '50%' }} p={[ 3, 3, 4 ]}>
          <Text fontSize={5}>
            Tab list
          </Text>
        </Box>
      </FlexCol>
    </GridContainer>
  </Container>
)

Intro.defaultProps = {}

const GridContainer = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
`

const FlexCol = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
`

const Container = styled(Flex)`
  flex-wrap: wrap;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('2')} {
    margin-top: -80px;
  }
`

export default Intro
