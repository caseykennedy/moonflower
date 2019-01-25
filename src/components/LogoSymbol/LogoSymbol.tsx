import * as React from 'react'
import config from '../../theme/config'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import theme from '../../theme/theme'
import Logo from '../../assets/logo-symbol.svg'

interface Props {
  width?: number
}

const LogoSymbol: React.SFC<Props> = ({width}) => <Symbol width={width} />

LogoSymbol.defaultProps = {
  width: 43
}

const Symbol = styled(Logo)`
  width: ${(p: Props) => p.width}px;
  animation: spin ${config.spinRate} linear infinite;
`

export default LogoSymbol
