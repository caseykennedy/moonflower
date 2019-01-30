import * as React from 'react'
import { connect } from 'react-redux'
// import { Container } from "semantic-ui-react"
import styled from 'styled-components'
import { Box, Heading, Flex, Link } from 'rebass'
import withSizes from 'react-sizes'
import { up, down, between, only } from 'styled-breakpoints'
import Headroom from 'react-headroom'
import { lighten } from 'polished'

import LogoSymbol from '../LogoSymbol'

import LogoType from '../../assets/logo.svg'
import IconMenu from '../../assets/menu.svg'

interface HeaderProps {
  isMobile: boolean
  width: any
}

const Header: React.SFC<HeaderProps> = ({ isMobile }) => (
  <Container as='header' width={1} px={[2, 3, 4, 4]}>
    <Flex alignItems='center' py={[2, 2, 3, 4]}>
      <Box width={1 / 2}>
        {/* <Box>{isMobile ? <LogoSymbol /> : <Logo />}</Box> */}
        <Logo />
      </Box>
      <Flex
        alignItems='baseline'
        color='White'
        width={1 / 2}
        justifyContent='flex-end'
      >
        
        <NavLink>delivery</NavLink>
        <NavLink>faq</NavLink>
        <NavLink>contact</NavLink>

        <Button>Place An Order</Button>
        {/* <BurgerBox ml={[ 2, 3, 4, 4 ]}>
          <IconMenu />
        </BurgerBox> */}
      </Flex>
    </Flex>
  </Container>
)

const mapSizesToProps = ({ width }: HeaderProps) => ({
  isMobile: width < 900
})

const Container = styled(Box)`
  position: absolute;
`

const Logo = styled(LogoType)`
  width: 180px;
`

const BurgerBox = styled(Flex)`
  align-self: center;
  height: 100%;
`

const Button = styled.a`
  border: 2px solid ${props => props.theme.colors.paleMoon};
  border-radius: 100px;
  color: ${props => props.theme.colors.paleMoon};
  cursor: pointer;
  display: none;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.6rem 2.6rem 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
  white-space: nowrap;

  &:hover {
    background-color: ${p =>
        p.theme.colors.pulse && lighten(0.1, p.theme.colors.pulse)};
    border-color: ${p =>
        p.theme.colors.pulse && lighten(0.1, p.theme.colors.pulse)};
    color: ${props => props.theme.colors.superNova};
  }

  &:active {
    background-color: ${p =>
      p.theme.colors.pulse && lighten(0.2, p.theme.colors.pulse)};
    border-color: ${p =>
      p.theme.colors.pulse && lighten(0.2, p.theme.colors.pulse)};
  }

  ${up('0')} {
    display: inherit;
  }
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.paleMoon};
  cursor: pointer;
  display: none;
  font-size: 1.4rem;
  margin-right: 2rem;
  /* text-transform: uppercase; */
  white-space: nowrap;

  &:hover {
    color: ${p => p.theme.colors.pulse && lighten(0.2, p.theme.colors.paleMoon)};
  }

  ${between('0','1')} {
    margin-right: 2rem;
  }
  ${up('0')} {
    display: inherit;
    font-size: 2rem;
    margin-right: 2rem;
  }
  ${up('1')} {
    margin-right: 3rem;
  }
`

export default withSizes(mapSizesToProps)(Header)
