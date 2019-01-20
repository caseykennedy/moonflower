import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex } from 'rebass'

import Hero from '../components/Hero'
import Intro from '../sections/Intro'
import ButtonLink from '../components/ButtonLink'
import Section from '../components/Section'

interface Props {}

const IndexPage: React.SFC<Props> = () => (
  <React.Fragment>
    <Hero>
      <Heading as='h1' fontSize={[ 8, 9, 9, 9 ]} color='superNova'>
        Mindfully curated<br />cannabis, delivered.
      </Heading>
      <Box mt={[ 6, 8, 10 ]}>
        <ButtonLink
          look='primary'
          size='default'
          variant='solid'
          radius={100}
          to='/'>
          Browse the menu
        </ButtonLink>
        <BoxHide>
          <ButtonLink
            look='primary'
            size='default'
            variant='outline'
            radius={100}
            m='0 0 0 1.6rem'
            to='/'>
            Best Sellers
          </ButtonLink>
        </BoxHide>
      </Box>
    </Hero>
    <Intro />

    <Section bg='darkSky' py={[ 100 ]}>
    </Section>

    <Section bg='darkSky' py={[ 120 ]}>
      <Box width={1/3}>
        <Heading as='h2' fontSize={8} mb={0} color='paleMoon'>
          <strong>moonflower</strong> is an online dispensary that thoughtfully curates &amp; delivers cannabis products directly to your doorstep. We’ve tried every product, checked every ingredient, and hand-selected the finest quality the Golden State has to offer.
        </Heading>
      </Box>
      
    </Section>
    <Box width={1} css={{ height: '60vh'}} />
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
