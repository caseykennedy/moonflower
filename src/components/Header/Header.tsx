import * as React from 'react'
import { connect } from 'react-redux'
// import { Container } from "semantic-ui-react"
import styled from 'styled-components'
import { Box, Heading, Flex, Link } from 'rebass'
import withSizes from 'react-sizes'

import LogoType from './assets/logo.svg'

import LogoSymbol from './assets/logo-symbol.svg'

interface HeaderProps {
  isMobile: boolean
  width: any
}

const Header = ({ isMobile }: HeaderProps) => (
  <Container as='header' width={1} px={[2, 3, 4, 4]}>
    <Flex
      alignItems='center'
      css={{ maxWidth: 1366 }}
      m='0 auto'
      py={[2, 3, 4]}
    >
      <Box width={1 / 2}>
        <Box>{ !isMobile ? <Logo /> : <Symbol />}</Box>
      </Box>
      <Flex
        alignItems='baseline'
        color='White'
        width={1 / 2}
        justifyContent='flex-end'
      >
        <NavLink>Info</NavLink>
        <NavLink>Contact</NavLink>
        <Button>Shop</Button>
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

const Symbol = styled(LogoSymbol)`
  width: 43px;
`

const Button = styled.a`
  border: 2px solid ${props => props.theme.colors.lavendar};
  border-radius: 100px;
  color: ${props => props.theme.colors.paleMoon};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.transatMedium};
  font-size: 1.4rem;
  padding: 2rem 3.5rem 1.8rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.colors.lavendar};
    color: ${props => props.theme.colors.superNova};
  }
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.paleMoon};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.transatMedium};
  font-size: 1.4rem;
  margin-right: 3rem;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.colors.goldBloom};
  }
`

export default withSizes(mapSizesToProps)(Header)
