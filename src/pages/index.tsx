import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex } from 'rebass'
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
        <Heading as='h1' fontSize={[8, 9, 9, 9]} color='superNova'>
          Mindfully curated medical cannabis • delivered
        </Heading>
        <Box mt={[4, 6, 8]}>
          <ButtonLink
            look='primary'
            size='default'
            variant='solid'
            radius={100}
            to='/'
          >
            Browse the menu
          </ButtonLink>
          <BoxHide>
            <ButtonLink
              look='primary'
              size='default'
              variant='outline'
              radius={100}
              m='0 0 0 1.6rem'
              to='/'
            >
              Best Sellers
            </ButtonLink>
          </BoxHide>
        </Box>
      </Fade>
    </Hero>

    <Section bg='' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Intro />
      </Fade>
    </Section>

    <Section pageWidth={1360}>
      <Fade>
        <Flex width={1} alignItems='baseline' pb={420} pl={4}>
          <Box width={2 / 4}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>moonflower</strong>
            </Heading>
          </Box>
          <Box width={2 / 4} pl={8}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>moonflower</strong> is an online dispensary that
              thoughtfully curates &amp; delivers cannabis products directly to
              your doorstep. We’ve tried every product, checked every ingredient,
              and hand-selected the finest quality the Golden State has to offer.
            </Heading>
          </Box>
        </Flex>
      </Fade>
    </Section>

    <Section bg='paleMoon' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end' mb={140}>
          <Flex bg='superNova' width={'100%'} p={4} alignItems='stretch'>
            <Heading as='h2' fontSize={6} mb={1600} color='paleMoon'>
              <strong>moonflower</strong>
            </Heading>
          </Flex>
        </Flex>
      </Fade>
    </Section>

    <Section bg='darkSky' pageWidth={1360}>
      <Fade distance='2rem' bottom>
        <Flex width={1} alignItems='flex-end' mt={-220}>
          <Flex bg='superNova' width={'100%'} p={4} alignItems='stretch'>
            <Box width={1 / 2} pr={8}>
              <Carousel data={data} />
            </Box>
            <Box
              width={1 / 2}
              bg='paleMoon'
              css={{
                backgroundImage:
                  'url(https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg)',
                backgroundSize: 'cover'
              }}
            />
          </Flex>
        </Flex>
      </Fade>
    </Section>
    <Section pageWidth={1360} bg='darkSky'>
      <Fade>
        <Flex width={1} alignItems='baseline' pb={420} pl={4}>
          <Box width={2 / 4}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>moonflower</strong>
            </Heading>
          </Box>
          <Box width={2 / 4} pl={8}>
            <Heading as='h2' fontSize={6} mb={0} color='paleMoon'>
              <strong>moonflower</strong> is an online dispensary that
              thoughtfully curates &amp; delivers cannabis products directly to
              your doorstep. We’ve tried every product, checked every ingredient,
              and hand-selected the finest quality the Golden State has to offer.
            </Heading>
          </Box>
        </Flex>
      </Fade>
    </Section>
    <Box bg='superNova' width={1} css={{ height: '60vh' }} />
  </React.Fragment>
)

const BoxHide = styled.span`
  display: none;

  ${up('1')} {
    display: inline-block;
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
