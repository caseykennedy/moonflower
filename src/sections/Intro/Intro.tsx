import * as React from 'react'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'

interface IntroProps {
  children: any
}

const Intro: React.SFC<IntroProps> = ({ children }) => (
  <Container bg='paleMoon' pb={80}>
    <GridContainer>
      <FlexCol width={[ 1, 1, 1/2 ]} bg='superNova' p={6}>
        <Text fontSize={5} pb={400}>
          Tab list
        </Text>
        <Text fontSize={5}><strong>moonflower</strong> is an online dispensary that thoughtfully curates &amp; delivers cannabis products directly to your doorstep. We’ve tried every product, checked every ingredient, and hand-selected the finest quality the Golden State has to offer.</Text>
      </FlexCol>
      <FlexCol width={[ 1, 1, 1/2 ]}>
        <Box width={1} bg='lavendar' css={{ height: '50%' }}>
          moon
        </Box>
        <Box width={1/2} bg='goldBloom'  css={{ height: '50%' }}>
          moon
        </Box>
        <Box width={1/2} bg='superNova'  css={{ height: '50%' }}>
          moon
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

  margin: 0 auto;

  width: 100%;
  max-width: 1366px;

  ${up('2')} {
    margin-top: -80px;
  }
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
