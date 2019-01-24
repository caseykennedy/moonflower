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
import Intro from '../sections/Intro'
import ButtonLink from '../components/ButtonLink'
import Section from '../components/Section'

import IconCc from '../assets/icon-card.svg'
import IconProcess from '../assets/icon-processing.svg'
import IconDelivery from '../assets/icon-delivery.svg'
import data from '../sections/Intro/data/slides.json'

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
          Mindfully curated medical cannabis
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
      pageWidth={1360}
      bgImage='https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg'
    >
      <Box pt={[0, 0, 160, 200]}>
        <Fade distance='2rem' bottom>
          <Intro />
        </Fade>
      </Box>
    </Section>

    <Section pageWidth={1360}>
      <Flex width={1} alignItems='baseline' flexWrap='wrap' pb={0}>
        <Fade>
          <Box width={[1, 1, 1, 6 / 8]} p={[4, 6, 8]} mb={3}>
            <Heading
              as='h2'
              fontSize={[6, 7, 8, 8]}
              mb={0}
              color='pulse'
              textAlign='left'
            >
              How does <strong>moonflower</strong> work? Doc, she's beautiful.
              She's crazy about me. Look at this, look what she wrote me, Doc.
              That says it all. Doc, you're my only hope.
            </Heading>
          </Box>
        </Fade>
        <Fade bottom cascade distance='2rem'>
          <Flex
            width={[1]}
            flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
            alignItems='stretch'
          >
            <Card p={[2, 3, 4, 4]} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
              <IconCard />
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={80}
                css={{ alignSelf: 'flex-start' }}
              >
                Must have a<br />
                valid ID &amp; medical card
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='pulse'
                css={{ alignSelf: 'flex-end' }}
              >
                Patients are responsible for having an ID and medical cannabis
                card from a doctor. The patients then can contact Moonflower via
                phone or online to make an order.
              </Text>
            </Card>
            <Card p={[2, 3, 4, 4]} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
              <IconProcessing />
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={80}
                css={{ alignSelf: 'flex-start' }}
              >
                Verification
                <br />
                &amp; processing
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='pulse'
                css={{ alignSelf: 'flex-end' }}
              >
                Moonflower must verify each patient and upon completion can pack
                up the order and get ready for delivery
              </Text>
            </Card>
            <Card p={[2, 3, 4, 4]}>
              <IconTruck />
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={80}
                css={{ alignSelf: 'flex-start' }}
              >
                Shop
                <br />
                online &amp; delivery
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='pulse'
                css={{ alignSelf: 'flex-end' }}
              >
                Delivered directly to you either at work, home, anywhere with an
                address really. Driver’s will check ID on on arrival for first
                time orders. Payment occurs at the delivery. Drivers do not
                carry excess change or product.
              </Text>
            </Card>
          </Flex>
        </Fade>
      </Flex>
    </Section>

    <Section bg='lunar' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end' mb={140}>
          <Flex bg='superNova' width={'100%'} p={4} alignItems='stretch'>
            <Heading as='h2' fontSize={6} mb={1600} color='paleMoon'>
              eCommerce iFrame
            </Heading>
          </Flex>
        </Flex>
      </Fade>
    </Section>

    <Section bg='darkSky' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end' mt={[-150, -160, -170, -180]}>
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
    <Section pageWidth={1360} bg='darkSky'>
      <Fade>
        <Flex
          width={1}
          alignItems='baseline'
          flexWrap='wrap'
          pb={420}
          pl={[0, 0, 4]}
        >
          <Box width={[1, 1, 1 / 2, 1 / 2]}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>how it works</strong>
            </Heading>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} pl={[0, 0, 8]}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>moonflower</strong> is an online dispensary that
              thoughtfully curates &amp; delivers cannabis products directly to
              your doorstep. We’ve tried every product, checked every
              ingredient, and hand-selected the finest quality the Golden State
              has to offer.
            </Heading>
          </Box>
        </Flex>
      </Fade>
    </Section>
    <Box bg='lunar' width={1} css={{ height: '60vh' }} />
  </React.Fragment>
)

const IconCard = styled(IconCc)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const IconProcessing = styled(IconProcess)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const IconTruck = styled(IconDelivery)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const BoxHide = styled.span`
  display: none;

  ${up('1')} {
    display: inline-block;
  }
`

const Card = styled(Box)`
  background-color: ${p => p.theme.colors.lunar};
  flex-grow: 1;
  transition: all 0.4s ease-out;

  &:hover {
    background-color: ${p => p.theme.colors.superNova};
    box-shadow: 0 0 7rem rgba(0, 0, 0, 0.06);
  }
`

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
