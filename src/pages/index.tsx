import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading } from 'rebass'

import Hero from '../components/Hero'
import ButtonLink from '../components/ButtonLink'

interface Props {
  children: any
}

const IndexPage: React.SFC<Props> = () => (
  <Layout>
    <Hero>
      <Box width={[ 7/8, 3/4, 3/5, 5/12 ]}>
        <Heading as='h1' fontSize={[ 8, 9, 9, 9 ]} color='superNova' fontFamily='transat'>
          Honest Medical Cannabis, at your doorstep.
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
      </Box>
    </Hero>
  </Layout>
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

export default IndexPage
