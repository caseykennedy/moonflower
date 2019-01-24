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
          <Box width={[1, 1, 1, 2 / 3]} p={[4, 6, 8]} mb={4}>
            <Heading
              as='h2'
              fontSize={[6, 7, 8, 8]}
              mb={0}
              color='spaceDust'
              textAlign='left'
            >
              Online dispensary that thoughtfully curates &amp; delivers
              cannabis products directly to your doorstep. We’ve tried every
              product, checked every ingredient, and hand-selected the finest
              quality the Golden State has to offer.
            </Heading>
          </Box>
        </Fade>

        <Flex
          width={[1]}
          flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
          alignItems='stretch'
        >
          <Fade distance='3rem' duration={1000} cascade bottom>
            <Card bg='white' p={4} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={200}
                css={{ alignSelf: 'flex-start' }}
              >
                Must have a<br />
                valid ID and medical card
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='spaceDust'
                css={{ alignSelf: 'flex-end' }}
              >
                Patients are responsible for having an ID and medical cannabis
                card from a doctor. The patients then can contact Moonflower via
                phone or online to make an order.
              </Text>
            </Card>
            <Card bg='white' p={4} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={200}
                css={{ alignSelf: 'flex-start' }}
              >
                Verification
                <br />
                and processing
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='spaceDust'
                css={{ alignSelf: 'flex-end' }}
              >
                Moonflower must verify each patient and upon completion can pack
                up the order and get ready for delivery
              </Text>
            </Card>
            <Card bg='white' p={4}>
              <Heading
                as='h4'
                fontSize={6}
                color='pulse'
                pb={4}
                mb={200}
                css={{ alignSelf: 'flex-start' }}
              >
                Online
                <br />
                order and delivery
              </Heading>
              <Text
                as='p'
                fontSize={4}
                mb={0}
                color='spaceDust'
                css={{ alignSelf: 'flex-end' }}
              >
                Delivered directly to you either at work, home, anywhere with an
                address really. Driver’s will check ID on on arrival for first
                time orders. Payment occurs at the delivery. Drivers do not
                carry excess change or product.
              </Text>
            </Card>
          </Fade>
        </Flex>
      </Flex>
    </Section>

    <Section bg='paleMoon' pageWidth={1360}>
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
            <Box width={[1, 1, 1, 1 / 2]} pr={[0, 0, 0, 8]} pt={[ 4, 4, 4, 0]}>
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
    <Box bg='pulse' width={1} css={{ height: '60vh' }} />
  </React.Fragment>
)

const BoxHide = styled.span`
  display: none;

  ${up('1')} {
    display: inline-block;
  }
`

const Card = styled(Box)`
  flex-grow: 1;
  transition: box-shadow 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 10rem rgba(0, 0, 0, 0.07);
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
