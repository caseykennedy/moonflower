import * as React from 'react'
import { Box, Flex, Text, Link } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { lighten } from 'polished'
import Fade from 'react-reveal/Fade'

import LogoSymbol from '../../components/LogoSymbol'

import IconFacebook from './assets/social-facebook-md.svg'
import IconTwitter from './assets/social-twitter-md.svg'
import IconInstagram from './assets/social-instagram-md.svg'

interface IntroProps {
  children?: any
}

const Intro: React.SFC<IntroProps> = ({ children }) => (
  <Flex
    width={1}
    bg='lunar'
    pt={[8, 8, 160, 160]}
    pb={[8, 8, 4, 4]}
    px={4}
    flexWrap='wrap'
    as='section'
  >
    <Row width={1} mb={[8, 8, 160, 160]} justifyContent='center'>
      <Text
        width={[1, 8 / 10, 1 / 2, 1 / 2]}
        fontSize={7}
        as='div'
        textAlign='center'
      >
        <Box width={1} mb={4}>
          <LogoSymbol width={56} />
        </Box>
        Feel free to <Link>place an order</Link>. If you need a medical card we
        can help you <Link>meet a doctor</Link>.
      </Text>
    </Row>

    <Row width={1} mb={[6, 6, 140, 140]} justifyContent='center'>
      <Text
        width={[1, 1, 1 / 2, 1 / 2]}
        fontSize={7}
        as='div'
        textAlign='center'
      >
        +1 707 313 1337
      </Text>
    </Row>

    <Row width={1} pt={[2, 3, 4, 4]}>
      <Flex
        width={1}
        flexWrap='wrap'
        justifyContent={['center', 'center', 'space-between', 'space-between']}
      >
        <Flex
          width={[1, 1, 1 / 3, 1 / 3]}
          justifyContent={['center', 'center', 'flex-start', 'flex-start']}
          fontSize={4}
          color='pulse'
          as='span'
        >
          <IconBox>
            <IconFacebook />
          </IconBox>
          <IconBox>
            <IconTwitter />
          </IconBox>
          <IconBox>
            <IconInstagram />
          </IconBox>
        </Flex>
        <Flex
          width={[1, 1, 1 / 3, 1 / 3]}
          justifyContent='center'
          fontSize={4}
          color='pulse'
          as='span'
        >
          <Link>faq</Link>&nbsp;&nbsp;/&nbsp;&nbsp;<Link>legal</Link>&nbsp;&nbsp;/&nbsp;&nbsp;<Link>contact</Link>
        </Flex>
        <Flex
          width={[1, 1, 1 / 3, 1 / 3]}
          justifyContent={['center', 'center', 'flex-end', 'flex-end']}
          fontSize={4}
          color='pulse'
          as='span'
        >
          © moonflower delivery
        </Flex>
      </Flex>
    </Row>
  </Flex>
)

Intro.defaultProps = {}

const IconBox = styled(Box)`
  margin-right: 1.4rem;

  & svg {
    cursor: pointer;
    fill: ${p => p.theme.colors.pulse};
    width: 2rem;
    transition: fill 0.2s ease-in;

    &:hover {
      fill: ${p => p.theme.colors.goldBloom};
    }
  }
`

const Row = styled(Flex)`
  line-height: 3rem;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('2')} {
  }
`

export default Intro
