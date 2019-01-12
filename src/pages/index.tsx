import * as React from "react"
import { Link } from "gatsby"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"
import { withLayout, LayoutProps, menuItems } from "../components/Layout"

import styled from "styled-components"
import { Box, Heading } from "rebass"

const IndexPage = () => (
  <React.Fragment>
    <Main bg="black" width={1} py={8} px={4} />    
  </React.Fragment>
)

const Main = styled(Box)`
  min-height: 80vh;
`

export default withLayout(IndexPage)
