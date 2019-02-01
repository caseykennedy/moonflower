import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Slider from '../components/Slider'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import Separator from '../components/Separator'

import LogoSymbol from '../components/LogoSymbol'
import Iframe from 'react-iframe'

import data from '../assets/data/slides.json'

interface Props {}

interface State {
  random: number
}

export class IndexPage extends React.Component<Props> {
  // constructor(props: Props) {
  //   super(props)

  //   this.state = {
  //     random: 0
  //   }
  // }

  // resetIframe = () => {
  //   this.setState({ random: this.state.random + 1 })
  // }

  public render() {
    const {} = this.props
    return (
      <Flex
          bg='#161623'
          pt={[135]}
          pb={[2, 3, 4, 4]}
          px={[2, 3, 4, 4]}
          alignItems='flex-end'
          css={{
            height: '58rem'
          }}
        >
          <Box width={[9 / 10, 1 / 2, 1 / 2]}>
            <Fade>
              <Heading
                as='h1'
                pb={0}
                lineHeight={1.1}
                fontSize={[5, 6, 8, 8]}
                color='paleMoon'
                css={{
                  fontWeight: 300
                }}
              >
                <strong>Marin County’s</strong> premier online dispensary,
                delivered to you.
              </Heading>
            </Fade>
          </Box>
        </Flex>
    )
  }
}

const Main = styled(Box)`
  min-height: 84vh;

  border-right: 6px solid ${props => props.theme.colors.paleMoon};

  ${between('sm', 'md')} {
    border-right: 6px solid ${props => props.theme.colors.ogPurp};
  }
  ${between('md', 'lg')} {
    border-right: 6px solid ${props => props.theme.colors.superNova};
  }
  ${up('lg')} {
    border-right: 6px solid ${props => props.theme.colors.goldBloom};
  }
`

export default withLayout(IndexPage)
