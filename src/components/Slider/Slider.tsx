import * as React from 'react'
import { Box, Text, Flex, Card } from 'rebass'
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

export class Slider extends React.Component<Props, State> {
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
          withoutControls={false}
          slidesToShow={1}
          slideIndex={this.state.slideIndex}
          swiping={true}
          wrapAround={true}
          speed={600}
        >
          {data.map(slide => (
            <Slide key={slide.id}>
              <SlideFrame width={1} flexWrap='wrap'>
                <Card
                  backgroundImage={'url(' + slide.image + ')'}
                  backgroundPosition='center center'
                  backgroundSize='cover'
                  p={[ 2, 3, 4, 4 ]}
                  width={1}
                  css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    flexDirection: 'column'
                  }}
                >
                  <Flex
                    bg='darkSky'
                    p={[ 3, 3, 4, 4 ]}
                    mt={[ 200, 0, 0 ]}
                    width={[ 1, 1, 1/2, 1/3 ]}
                    fustifyContent='center'
                    alignItems='center'
                    flexWrap='wrap'
                  >
                    <Box width={1}>
                      <Text
                        as='p'
                        color='lunar'
                        mb={8}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                    </Box>
                    <Box width={1}>
                      <Text
                        as='p'
                        color='lunar'
                        css={{ alignSelf: 'flex-end' }}
                        dangerouslySetInnerHTML={{ __html: slide.content }}
                      />
                    </Box>
                  </Flex>
                </Card>
              </SlideFrame>
            </Slide>
          ))}
        </Carousel>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}

const Image = styled(Box)`
  position: relative;
`

const Slide = styled(Box)``

const SlideFrame = styled(Flex)`
  height: 100%;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('0')} {
    height: 80vh;
  }
`

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

  .slider-frame {
    overflow: visible !important;
  }
`

export default Slider