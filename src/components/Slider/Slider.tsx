import * as React from 'react'
import { Box, Text, Flex, Card, Link } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'
import Carousel from 'nuka-carousel'
import { up, down, between, only } from 'styled-breakpoints'

import ArrowLeft from '../../assets/chevron-left-lg.svg'
import ArrowRight from '../../assets/chevron-right-lg.svg'

interface Props {
  data: Array<{
    id: number
    title: string
    content: string
    image: string
    link?: string
    linkText?: string
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
          renderCenterLeftControls={({ previousSlide }) => (
            <ButtonLeft onClick={previousSlide}><Previous /></ButtonLeft>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <ButtonRight onClick={nextSlide}><Next /></ButtonRight>
          )}
        >
          {data.map(slide => (
            <Slide key={slide.id}>
              <SlideFrame width={1} flexWrap='wrap'>
                <SlideCard
                  backgroundImage={'url(' + slide.image + ')'}
                  backgroundPosition='center center'
                  backgroundSize='cover'
                  width={1}
                  p={[2]}
                >
                  <SlidePanel
                    bg='rgba(20, 19, 32, 0.90)'
                    p={[2, 3, 4, 4]}
                    mt={[200, 0, 0]}
                    width={[1, 9 / 10, 8 / 10, 1 / 3]}
                    fustifyContent='center'
                    alignItems='center'
                    flexWrap='wrap'
                  >
                    <Box width={1}>
                      <Text
                        as='p'
                        fontSize={[3, 4, 5, 5]}
                        color='lunar'
                        mb={[4, 4, 6, 8]}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                    </Box>
                    <Box width={1}>
                      <Text
                        as='p'
                        fontSize={[3, 4, 5, 5]}
                        color='lunar'
                        mb={2}
                        dangerouslySetInnerHTML={{ __html: slide.content }}
                      />
                      <StyledLink fontSize={[3, 4, 5, 5]} href={slide.link}>
                        {slide.linkText}
                      </StyledLink>
                    </Box>
                  </SlidePanel>
                </SlideCard>
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

const Previous = styled(ArrowLeft)`
  width: 1.6rem;
  height: 1.6rem;
  stroke: white;
`

const Next = styled(ArrowRight)`
  width: 1.6rem;
  height: 1.6rem;
  stroke: white;
`

const ButtonLeft = styled.button`
  background-color: rgba(17, 17, 27, 0.95);
  padding: 1.8rem 2rem 1.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  opacity: 0.4;
  transition: all 0.1s ease-in;

  &:hover {
    opacity: 1;
  }
`

const ButtonRight = styled.button`
  background-color: rgba(17, 17, 27, 0.95);
  padding: 1.8rem 2rem 1.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  opacity: 0.4;
  transition: all 0.1s ease-in;

  &:hover {
    opacity: 1;
  }
`

const SlidePanel = styled(Flex)``

const StyledLink = styled(Link)`
  border-bottom: 2px solid ${p => p.theme.colors.ogPurp};
  color: ${p => p.theme.colors.lunar};
  text-decoration: none;
  padding-bottom: 0.1rem;

  &:hover {
    border-color: currentColor;
  }
`

const SlideCard = styled(Card)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
`

const SlideFrame = styled(Flex)`
  height: 570px;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('0')} {
    height: 90vh;
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

  .slider-control-centerleft {
    top: 30px !important;
  }
  .slider-control-centerright {
    top: 30px !important;
  }

  .slider-frame {
    overflow: visible !important;
  }
`

export default Slider
