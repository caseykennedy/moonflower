import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'

import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading } from 'rebass'

const IndexPage = () => (
  <React.Fragment>
    <Main bg='purpleRain' width={1} py={100} px={3}>
      
    </Main>
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
