import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { darken, em, shade } from 'polished'
import { up, down, between, only } from 'styled-breakpoints'

interface ButtonProps {
  to: string
  children?: React.ReactChild
  className?: string
  radius?: number
  m?: string
  size?: 'small' | 'default' | 'big'
  variant?: 'solid' | 'outline' | 'block'
  look?: 'primary' | 'secondary' | 'dark' | 'light'
}

const Button: React.SFC<ButtonProps> = ({ children, className, to }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 1.6rem 2rem 1.4rem;
  `,
  default: css`
    font-size: 1.2rem;
    padding: 1.6rem 2.6rem 1.4rem;

    ${between('0', '1')} {
      font-size: 1.4rem;
      padding: 2rem 3.5rem 1.8rem;
    }
    ${between('1', '2')} {
      font-size: 1.4rem;
      padding: 2rem 3.5rem 1.8rem;
    }
    ${up('2')} {
      font-size: 1.4rem;
      padding: 2rem 3.5rem 1.8rem;
    }
  `,
  big: css`
    font-size: 1.2rem;
    padding: 1.6rem 2rem 1.4rem;
  `
}

const variants = {
  solid: css``,
  outline: css`
    background: transparent;
  `,
  block: css`
    width: 100%;
    display: block;
  `
}

const looks = {
  primary: css`
    background-color: ${props => props.theme.colors.paleMoon};
    border: 2px solid ${p => p.theme.colors.paleMoon};
    color: ${props => props.theme.colors.darkSky};

    &:hover {
      background-color: ${p =>
        p.theme.colors.superNova && shade(0.1, p.theme.colors.superNova)};
      border-color: ${p =>
        p.theme.colors.superNova && shade(0.1, p.theme.colors.superNova)};
    }
    &:active {
      background-color: ${p =>
        p.theme.colors.superNova && shade(0.2, p.theme.colors.superNova)};
      border-color: ${p =>
        p.theme.colors.superNova && shade(0.2, p.theme.colors.superNova)};
    }
  `,
  dark: css`
    background-color: ${props => props.theme.colors.paleMoon};
    border: 2px solid ${p => p.theme.colors.paleMoon};
    color: ${props => props.theme.colors.darkSky};

    &:hover {
      background-color: ${p =>
        p.theme.colors.paleMoon && shade(0.1, p.theme.colors.paleMoon)};
      border-color: ${p =>
        p.theme.colors.paleMoon && shade(0.1, p.theme.colors.paleMoon)};
    }
    &:active {
      background-color: ${p =>
        p.theme.colors.paleMoon && shade(0.2, p.theme.colors.paleMoon)};
      border-color: ${p =>
        p.theme.colors.paleMoon && shade(0.2, p.theme.colors.paleMoon)};
    }
  `,
  light: css`
    background-color: ${props => props.theme.colors.lavendar};
    border: 2px solid ${p => p.theme.colors.lavendar};
    color: ${props => props.theme.colors.darkSky};

    &:hover {
      background-color: ${p =>
        p.theme.colors.lavendar && shade(0.1, p.theme.colors.lavendar)};
      border-color: ${p =>
        p.theme.colors.lavendar && shade(0.1, p.theme.colors.lavendar)};
    }
    &:active {
      background-color: ${p =>
        p.theme.colors.lavendar && shade(0.2, p.theme.colors.lavendar)};
      border-color: ${p =>
        p.theme.colors.lavendar && shade(0.2, p.theme.colors.lavendar)};
    }
  `
}

const ButtonLink = styled(Button)`
  ${({ size = 'default' }) => sizes[size]};
  ${({ look = 'primary' }) => looks[look]};
  ${({ variant = 'solid' }) => variants[variant]};

  border: 2px solid ${props => props.theme.colors.paleMoon};
  border-radius: ${({ radius = 300 }) => radius}px;
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.fonts.transatBold};
  letter-spacing: 0.3em;
  margin: ${p => p.m};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  color: ${p => {
    if (p.variant === 'outline' && p.look === 'primary') {
      return p.theme.colors.paleMoon
    }
    if (p.variant === 'outline' && p.look === 'dark') {
      return p.theme.colors.darkSky
    }
    if (p.variant === 'outline' && p.look === 'light') {
      return p.theme.colors.lavendar
    }
  }};

  &:hover {
    color: ${p => {
      if (p.variant === 'outline' && p.look === 'primary') {
        return p.theme.colors.darkSky
      }
      if (p.variant === 'outline' && p.look === 'dark') {
        return p.theme.colors.darkSky
      }
      if (p.variant === 'outline' && p.look === 'light') {
        return p.theme.colors.darkSky
      }
    }};
  }
`

// const Button = styled(Link)`
//   background-color: ${props => props.theme.colors.paleMoon};
//   border: 2px solid ${props => props.theme.colors.paleMoon};
//   border-radius: 100px;
//   color: ${props => props.theme.colors.darkSky};
//   cursor: pointer;
//   font-family: ${props => props.theme.fonts.transatBold};
//   font-size: 1.2rem;
//   letter-spacing: 0.3em;
//   padding: 1.6rem 2rem 1.4rem;
//   text-decoration: none;
//   text-transform: uppercase;

//   &:hover {
//     background-color: ${props => props.theme.colors.superNova};
//     border-color: ${props => props.theme.colors.superNova};
//   }

//   ${between('0', '1')} {
//     font-size: 1.4rem;
//     padding: 2rem 3.5rem 1.8rem;
//   }
//   ${between('1', '2')} {
//     font-size: 1.4rem;
//     padding: 2rem 3.5rem 1.8rem;
//   }
//   ${up('2')} {
//     font-size: 1.4rem;
//     padding: 2rem 3.5rem 1.8rem;
//   }
// `

export default ButtonLink
