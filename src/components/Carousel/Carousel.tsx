import * as React from 'react'
import { Box, Text, Flex } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'
import Carousel from 'nuka-carousel'
import { up, down, between, only } from 'styled-breakpoints'

interface Props {
  data: Array<{
    id: number
    title: string
    content: string
    image: string
  }>
}

interface State {
  slideIndex: number
}

export class CarouselText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      slideIndex: 0
    }
  }

  public render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <Carousel
          autoplay={true}
          autoplayInterval={9000}
          heightMode='first'
          transitionMode='fade'
          withoutControls={true}
          slidesToShow={1}
          slideIndex={this.state.slideIndex}
          swiping={true}
          wrapAround={true}
          speed={1000}
        >
          {data.map(slide => (
            <Slide key={slide.id} >
              <Flex width={1} flexWrap='wrap'>
                <Box width={1/2}>
                  <Text
                    as='h4'
                    fontSize={5}
                    mb={4}
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                </Box>
                <Image width={1/2}>
                  <img src={slide.image}  />
                </Image>
              </Flex>
              <Flex width={1} flexWrap='wrap'>
                <Text
                  as='p'
                  fontSize={5}
                  css={{ alignSelf: 'flex-end' }}
                  dangerouslySetInnerHTML={{ __html: slide.content }}
                />
              </Flex>
            </Slide>
          ))}
        </Carousel>
        {data.map(slide => (
          <DotDot
            onClick={() => this.setState({ slideIndex: slide.id })}
            key={slide.id}
          />
        ))}
        <GlobalStyle />
      </React.Fragment>
    )
  }
}

const Image = styled(Box)`
  position: relative;
  right: -4rem;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('1')} {
    right: -8rem;
  }
`

const Slide = styled(Box)``

const DotDot = styled.button`
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  cursor: pointer;
  margin-right: 0.5rem;
  padding: 3rem 0 0;
  width: 6rem;
  transition: border-color 0.2s ease-in;

  &:hover {
    border-color: ${props => props.theme.colors.purpleRain};
  }
`

const GlobalStyle = createGlobalStyle`
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }

  .slider-frame {
    overflow: visible !important;
  }
`

export default CarouselText
