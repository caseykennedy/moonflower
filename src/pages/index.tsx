import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Carousel from '../components/Carousel'
import Fade from 'react-reveal/Fade'

import Hero from '../components/Hero'
import ButtonLink from '../components/ButtonLink'
import Section from '../components/Section'
import LogoSymbol from '../components/LogoSymbol'

import Intro from '../sections/Intro'
import HowItWorks from '../sections/HowItWorks'
import Footer from '../sections/Footer'

import IconCc from '../assets/icon-card.svg'
import IconProcess from '../assets/icon-processing.svg'
import IconDelivery from '../assets/icon-delivery.svg'
import data from '../sections/Intro/data/slides.json'
import theme from '../theme/theme'

interface Props {}

const IndexPage: React.SFC<Props> = () => (
  <React.Fragment>
    <Hero>
      <Fade>
        <Heading
          as='h1'
          fontSize={[8, 50, 60, 70]}
          letterSpacing='-0.2rem'
          color='pulse'
          mt={8}
        >
          Curated Cali cannabis, swiftly delivered
        </Heading>
        <Box mt={[4]}>
          <ButtonLink
            look='primary'
            size='default'
            variant='solid'
            radius={100}
            to='/'
          >
            Browse the menu
          </ButtonLink>
        </Box>
      </Fade>
    </Hero>

    <Section
      bg='darkSky'
      pageWidth={'100%'}
      bgImage='https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg'
    >
      <Box mt={[160, 200, 200, 300]}>
        <Fade distance='2rem' bottom>
          <Flex width={1} justifyContent='center'>
            <Box
              width={[1, 2 / 3, 1 / 2, 1 / 2]}
              bg='superNova'
              p={[2, 4, 6, 6]}
            >
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
                moonflower's purpose is to encourage others to think differently
                about cannabis and break the age old stigma that it was once
                plagued with.
              </Heading>
            </Box>
          </Flex>
        </Fade>
      </Box>
    </Section>

    {/* <Section
      bg='darkSky'
      pageWidth={1360}
      bgImage='https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg'
    >
      <Box pt={[0, 0, 160, 200]}>
        <Fade distance='2rem' bottom>
          <Intro />
        </Fade>
      </Box>
    </Section> */}

    <HowItWorks />

    <Section bg='lunar' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end'>
          <Flex bg='superNova' width={'100%'} p={4} alignItems='stretch'>
            <Heading as='h2' fontSize={6} mb={1600} color='paleMoon'>
              eCommerce iFrame
            </Heading>
          </Flex>
        </Flex>
      </Fade>
    </Section>

    <Section pageWidth={1360} bg='darkSky'>
      <Fade>
        <Box width={[1, 1, 1, 6 / 8]} px={[4, 6, 8]} py={[6, 10, 200]} mb={3}>
          <Heading
            as='h2'
            fontSize={[6, 7, 8, 8]}
            mb={0}
            color='paleMoon'
            textAlign={['center', 'center', 'left', 'left']}
            css={{ fontWeight: '300' }}
          >
            Do you need a Doctor's recommendation for a medical cannabis card?
            Take a look below at our list of highly recommended Doctors.
          </Heading>
        </Box>
      </Fade>
      <Fade>
        <Flex width={1} alignItems='baseline' flexWrap='wrap' px={[4, 6, 8]}>
          <Flex
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            alignItems='baseline'
            flexWrap='wrap'
            pr={[0, 0, 3, 4]}
            pb={[8, 8, 160, 160]}
          >
            <Box width={[1, 1, 1 / 2, 1 / 3]}>
              <Heading as='h2' fontSize={4} color='lavendar'>
                Dr. Frank MD
              </Heading>
            </Box>
            <Box width={[1, 1, 1 / 2, 2 / 3]}>
              <Heading as='h2' fontSize={4} mb={0} color='paleMoon'>
                Frank Lucido MD has provided Primary Care in the same beautiful
                location for 35 years, including Nurse Practitioner Maria
                Mangini PhD, FNP for almost 20 years. We are known as the most
                legitimate cannabis doctor’s office since Prop. 215 passed in
                1996.
              </Heading>
            </Box>
          </Flex>
          <Flex
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            alignItems='baseline'
            flexWrap='wrap'
            pl={[0, 0, 3, 4]}
            pb={[8, 8, 160, 160]}
          >
            <Box width={[1, 1, 1 / 2, 1 / 3]}>
              <Heading as='h2' fontSize={4} color='lavendar'>
                HelloMD
              </Heading>
            </Box>
            <Box width={[1, 1, 1 / 2, 2 / 3]}>
              <Heading as='h2' fontSize={4} mb={0} color='paleMoon'>
                Frank Lucido MD has provided Primary Care in the same beautiful
                location for 35 years, including Nurse Practitioner Maria
                Mangini PhD, FNP for almost 20 years. We are known as the most
                legitimate cannabis doctor’s office since Prop. 215 passed in
                1996.
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Fade>
      <Fade>
        <Flex width={1} alignItems='baseline' flexWrap='wrap' px={[4, 6, 8]}>
          <Flex
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            alignItems='baseline'
            flexWrap='wrap'
            pr={[0, 0, 3, 4]}
            pb={[8, 8, 160, 160]}
          >
            <Box width={[1, 1, 1 / 2, 1 / 3]}>
              <Heading as='h2' fontSize={4} color='lavendar'>
                Dr. Frank MD
              </Heading>
            </Box>
            <Box width={[1, 1, 1 / 2, 2 / 3]}>
              <Heading as='h2' fontSize={4} mb={0} color='paleMoon'>
                Frank Lucido MD has provided Primary Care in the same beautiful
                location for 35 years, including Nurse Practitioner Maria
                Mangini PhD, FNP for almost 20 years. We are known as the most
                legitimate cannabis doctor’s office since Prop. 215 passed in
                1996.
              </Heading>
            </Box>
          </Flex>
          <Flex
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            alignItems='baseline'
            flexWrap='wrap'
            pl={[0, 0, 3, 4]}
            pb={[8, 8, 160, 160]}
          >
            <Box width={[1, 1, 1 / 2, 1 / 3]}>
              <Heading as='h2' fontSize={4} color='lavendar'>
                HelloMD
              </Heading>
            </Box>
            <Box width={[1, 1, 1 / 2, 2 / 3]}>
              <Heading as='h2' fontSize={4} mb={0} color='paleMoon'>
                Frank Lucido MD has provided Primary Care in the same beautiful
                location for 35 years, including Nurse Practitioner Maria
                Mangini PhD, FNP for almost 20 years. We are known as the most
                legitimate cannabis doctor’s office since Prop. 215 passed in
                1996.
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Fade>
    </Section>
    <Section bg='darkSky' pageWidth={1360}>
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
    </Section>

    <Footer />
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
