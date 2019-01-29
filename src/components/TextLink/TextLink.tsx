import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { up, down, between, only } from 'styled-breakpoints'
import { supportsGoWithoutReloadUsingHash } from 'history/DOMUtils'

interface Props {
  to: string
  children?: React.ReactChild
  color?: string
}

const TextLink: React.SFC<Props> = ({ children, to }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

const StyledLink = styled(Link)`
  border-bottom: 2px solid ${p => p.theme.colors.ogPurp};
  color: currentColor;
  text-decoration: none;
  padding-bottom: 0.1rem;

  &:hover {
    border-color: currentColor;
  }
`

export default TextLink
