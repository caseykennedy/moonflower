import * as React from "react"
import { connect } from "react-redux"
// import { Container } from "semantic-ui-react"
import styled from "styled-components"
import { Box } from "rebass"

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = ({}) => (
  <Container as="header" width={1} px={[2, 3, 4, 0]}>
    <Box css={{ maxWidth: 1366 }} m="0 auto" py={[2, 3, 4]}>
      <h1>moonflower</h1>
    </Box>
  </Container>
)

const Container = styled(Box)``

export default Header
