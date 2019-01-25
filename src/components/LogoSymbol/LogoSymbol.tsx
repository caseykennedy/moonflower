import * as React from 'react'
import config from '../../theme/config'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Logo from '../../assets/logo-symbol.svg'

interface Props {
  width?: number
  fill?: string
}

const LogoSymbol: React.SFC<Props> = ({ width, fill }) => (
  <Symbol width={width} fill={fill} />
)

LogoSymbol.defaultProps = {
  width: 43,
  fill: theme.colors.pulse
}

const Symbol = styled(Logo)`
  animation: spin ${config.spinRate} linear infinite;
  fill: ${(p: Props) => p.fill};
  width: ${(p: Props) => p.width}px;
`

export default LogoSymbol
