import * as React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"

interface Props {
  bg?: string,
  px?: any,
  py?: any,
  pageWidth?: number
}

export class Section extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    bg: "",
    px: [3, 4, 4],
    py: 6,
    pageWidth: 1170
  }
  public render() {
    const { children, bg, px, py, pageWidth } = this.props
    return (
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        bg={bg}
        px={px}
        py={py}>

        <PageWidth pageWidth={pageWidth}>
          {children}
        </PageWidth>

      </Flex>
    )
  }
}

const PageWidth = styled(Box)`
  width: ${p => p.pageWidth}px;
  margin: 0 auto;
`

export default Section