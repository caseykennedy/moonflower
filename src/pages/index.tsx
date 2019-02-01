import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Carousel from '../components/Carousel'
import Fade from 'react-reveal/Fade'
import Iframe from 'react-iframe'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Hero from '../components/Hero'
import ButtonLink from '../components/ButtonLink'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import Separator from '../components/Separator'
import LogoSymbol from '../components/LogoSymbol'

import Intro from '../sections/Intro'
import HowItWorks from '../sections/HowItWorks'

interface Props {}

interface State {
  random: number
}

export class IndexPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)



    this.state = {
      random: 0
    }
  }



  resetIframe = () => {
    this.setState({random: this.state.random + 1})
  }

  public render() {
    const {  } = this.props
    return (
      <React.Fragment>
        <Flex
          bg='darkSky'
          pt={[135]}
          pb={4}
          px={[2, 3, 4, 4]}
          alignItems='flex-end'
          css={{
            height: '48rem'
          }}
        >
          <Box width={[1, 1, 1 / 2]}>
            <Fade>
              <Heading
                as='h1'
                pb={0}
                lineHeight={1.1}
                fontSize={[6, 7, 8, 8]}
                color='lunar'
                css={{
                  fontWeight: 400
                }}
              >
                <strong>Marin County’s</strong> premier online dispensary,
                delivered to you.
              </Heading>
            </Fade>
          </Box>
        </Flex>
        {/* <Hero>
      <Fade>
        <Heading
          as='h1'
          fontSize={[8, 50, 60, 60]}
          letterSpacing={[0, 0, '-0.2rem', '-0.2rem']}
          color='lunar'
          mt={8}
        >
          Marin county’s premier online dispensary, delivered to you
        </Heading>
        <Box mt={[4]}>
          <AnchorLink href='#shop' style={{ textDecoration: 'none' }}>
            <ButtonLink
              as='span'
              look='light'
              size='default'
              variant='solid'
              radius={100}
              to='#'
            >
              Browse the menu
            </ButtonLink>
          </AnchorLink>
        </Box>
      </Fade>
    </Hero> */}

        <Section
          bg='darkSky'
          pageWidth={'100%'}
          bgImage='https://images.unsplash.com/photo-1513656967094-e96936e02fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
        >
          <Box mt={[160, 200, 200, 600]}>
            <Fade distance='2rem' bottom>
              <Flex width={1} justifyContent='flex-end' />
            </Fade>
          </Box>
        </Section>

        <Section bg='darkSky' pageWidth={'100%'} py={4}>
          <Box mt={[0]}>
            <Fade distance='2rem' bottom>
              <Flex width={1} justifyContent='center'>
                <Box width={8 / 10}>
                  <Heading
                    as='p'
                    fontSize={[5]}
                    mb={0}
                    color='lavendar'
                    css={{
                      fontWeight: 400
                    }}
                  >
                    <Text
                      as='span'
                      color='paleMoon'
                      css={{
                        fontWeight: 400
                      }}
                    >
                      Need a medical cannabis card?
                    </Text>
                    <br />
                    It's easy to get an online medical recommendation from the
                    comfort of your own home.
                  </Heading>
                </Box>
                <Box width={2 / 10}>
                  <Text as='p' color='paleMoon'>
                    <TextLink to='/'>
                      book a fast &amp; easy online appointment
                    </TextLink>
                  </Text>
                </Box>
              </Flex>
            </Fade>
          </Box>
        </Section>

        <Separator />

        {/* <Section
      bg='darkSky'
      pageWidth={'100%'}
      bgImage='https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg'
    >
      <Box mt={[160, 200, 200, 300]}>
        <Fade distance='2rem' bottom>
          <Flex width={1} justifyContent='flex-end'>
            <Box width={[1, 2 / 3, 1 / 2, 1 / 2]} bg='lunar' p={[2, 4, 6, 6]}>
              <Box width={1} mb={[2, 4, 6, 6]} css={{ textAlign: 'center' }}>
                <LogoSymbol width={53} fill='black' />
              </Box>
              <Heading
                as='h2'
                fontSize={[4, 5, 6, 6]}
                color='pulse'
                textAlign='center'
                pb={0}
              >
                Now delviering in Marin &amp; Sonoma
              </Heading>
            </Box>
          </Flex>
        </Fade>
      </Box>
    </Section> */}

        <Section bg='darkSky' pageWidth={'100%'} px={0} py={0}>
          <Flex width={1} alignItems='stretch' flexDirection='column' id='shop'>
            <Box width={1} py={8} css={{ textAlign: 'center' }}>
              <Text as='p' fontSize={6} pb={1} color='paleMoon'>
                phone orders: <strong>+1 (707) 731 1337</strong>
              </Text>

              <Text as='p' fontSize={2} color='lavendar'>
                Bureau of Cannabis Control | License Number: C9-18-0000070-TEMP
              </Text>
            </Box>
            <Separator />
            <Box width={1}>
              <Iframe
                id='blazeIframe'
                frameborder='0'
                width='100%'
                height='110vh'
                display='initial'
                position='relative'
                onLoad={this.resetIframe}
                url=''
                allowFullScreen
              />
            </Box>
          </Flex>
        </Section>

        {/* <Section bg='darkSky' py={300}>
      <Box css={{ textAlign: 'center', margin: '0 auto' }} width={'40%'}>
        <Heading as='h2' fontSize={8} mb={0} color='paleMoon'>
          Medical Recommendation
        </Heading>
      </Box>
    </Section> */}

        {/* <Section pageWidth={1360} bg='darkSky' py={[160, 160, 200]}>
      <Box width={[1, 1, 1, 6 / 8]} px={[2, 6, 8]}>
        <Heading
          as='h3'
          fontSize={[6, 7, 8, 8]}
          mb={8}
          color='lavendar'
          css={{
            fontWeight: 300
          }}
        >
          <Text
            as='span'
            color='paleMoon'
            css={{
              fontWeight: 400
            }}
          >
            Need a medical marijuana card?
          </Text>{' '}
          It's easy to get an online medical recommendation from the comfort of
          your own home.
        </Heading>
        <Text as='p' color='paleMoon'>
          <TextLink to='/'>Book a fast &amp; easy online appointment</TextLink>
        </Text>
      </Box>
    </Section> */}
      </React.Fragment>
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
