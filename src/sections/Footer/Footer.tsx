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
    pb={[8, 8, 3, 3]}
    px={4}
    flexWrap='wrap'
    as='section'
  >
    <Row width={1} mb={[8, 8, 160, 160]} justifyContent='center'>
      <Text
        width={[1, 8 / 10, 1 / 2, 1 / 2]}
        fontSize={5}
        lineHeight='1.1'
        as='span'
        textAlign='center'
      >
        <Fade duration={1600}>
          <Box width={1} mb={[8, 8, 160, 160]}>
            <LogoSymbol width={53} />
          </Box>
          <Box width={1} color='pulse'>
            <strong>moonflower's</strong> purpose is to encourage others to
            think differently about cannabis and break the age old stigma that
            it was once plagued with.
          </Box>
        </Fade>
      </Text>
    </Row>

    <Row width={1} mb={[6, 6, 140, 140]} justifyContent='center'>
      <Text
        width={[1, 1, 1 / 2, 1 / 2]}
        fontSize={[6, 6, 8, 9]}
        as='div'
        textAlign='center'
      >
        <Fade bottom cascade distance='2rem' duration={1600}>
          +1 (707) 313 1337
        </Fade>
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
          <Link>faq</Link>&nbsp;&nbsp;/&nbsp;&nbsp;<Link>legal</Link>
          &nbsp;&nbsp;/&nbsp;&nbsp;<Link>contact</Link>
        </Flex>
        <Flex
          width={[1, 1, 1 / 3, 1 / 3]}
          justifyContent={['center', 'center', 'flex-end', 'flex-end']}
          fontSize={4}
          color='pulse'
          as='span'
        >
          © moonflower{' '}
          <Text as='span' color='lavendar'>
            &nbsp;&bull;&nbsp;C9-18-0000070-TEMP
          </Text>
        </Flex>
      </Flex>
    </Row>
  </Flex>
)

Intro.defaultProps = {}

const IconBox = styled(Box)`
  margin-right: 1.4rem;

  &:last-child {
    margin-right: 0;
  }

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

const LinkHighlight = styled(Link)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
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
