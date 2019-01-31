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

import Intro from '../sections/Intro'
import HowItWorks from '../sections/HowItWorks'

interface Props {}

const IndexPage: React.SFC<Props> = () => (
  <React.Fragment>
    <Hero>
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
    </Hero>

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
                <LogoSymbol width={53} fill={theme.colors.pulse} />
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

    <Section bg='lunar' pageWidth={1360}>
      <Box mt={-120}>
        <Fade distance='2rem' bottom>
          <Intro />
        </Fade>
      </Box>
    </Section>

    <HowItWorks />

    <Section bg='darkSky' pageWidth={'100%'} px={0} py={0}>
        <Flex
          width={1}
          alignItems='stretch'
          flexDirection='column'
          id='shop'
        >
          <Box width={1} py={4} css={{textAlign: 'center'}}>
            <Text as='p' fontSize={4} pb={1} color='paleMoon'>
              Phone orders, please call: +1 (707) 731 1337
            </Text>

            <Text as='p' fontSize={4} color='paleMoon'>
              Bureau of Cannabis Control | License Number: C9-18-0000070-TEMP
            </Text>
          </Box>
          <Box width={1}>
            <Iframe
              id='blazeIframe'
              frameborder='0'
              width='100%'
              height='100vh'
              className='myClassname'
              display='initial'
              position='relative'
              allowFullScreen
            />
          </Box>
        </Flex>
    </Section>

    {/* <Section bg='darkSky' py={300}>
      <Box css={{textAlign: 'center', margin: '0 auto'}} width={'40%'}>
        <Heading as='h2' fontSize={8} mb={0} color='paleMoon'>
          Testimonials
        </Heading>
      </Box>
    </Section> */}

    <Section pageWidth={1360} bg='darkSky' py={[160, 160, 200]}>
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
            <Text as='span' color='paleMoon' css={{
            fontWeight: 400
          }}>
              Need a medical marijuana card?
            </Text>{' '}
            It's easy to get an online medical recommendation from the comfort
            of your own home.
        </Heading>
        <Text as='p' color='paleMoon'>
          <TextLink to='/'>Book a fast &amp; easy online appointment</TextLink>
        </Text>
      </Box>
    </Section>

    {/* <Section bg='darkSky' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end'>
          <Flex
            bg='superNova'
            flexWrap='wrap'
            flexDirection='row-reverse'
            width={'100%'}
            p={[1, 2, 4, 4]}
            alignItems='stretch'
          >
            <Box
              width={[1, 1, 1, 1 / 2]}
              bg='paleMoon'
              css={{
                backgroundImage:
                  'url(https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                height: 600
              }}
            />
            <Box width={[1, 1, 1, 1 / 2]} pr={[0, 0, 0, 8]} pt={[4, 4, 4, 0]}>
              <Carousel data={data} />
            </Box>
          </Flex>
        </Flex>
      </Fade>
    </Section> */}
  </React.Fragment>
)

const Main = styled(Box)`
  min-height: 84vh;

  /* border-right: 6px solid ${props => props.theme.colors.paleMoon};

  ${between('sm', 'md')} {
    border-right: 6px solid ${props => props.theme.colors.ogPurp};
  }
  ${between('md', 'lg')} {
    border-right: 6px solid ${props => props.theme.colors.superNova};
  }
  ${up('lg')} {
    border-right: 6px solid ${props => props.theme.colors.goldBloom};
  } */
`

export default withLayout(IndexPage)
