import * as React from 'react'
import { Box, Text } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Fade from 'react-reveal/Fade'

interface CarouselProps {
  data: Array<{
    id: number
    title: string
    content: string
  }>
}

export class Carousel extends React.Component<CarouselProps> {
  public render() {
    const { data } = this.props
    return (
      <CarouselContainer
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        isPlaying={true}
        interval={9000}
      >
        <Slider classNameAnimation='slider-fade'>
          {data.map(slide => (
            <Slide index={slide.id} key={slide.id}>
              <Text
                as='h3'
                fontSize={7}
                pb={140}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <Text
                as='p'
                fontSize={5}
                mb={0}
                dangerouslySetInnerHTML={{ __html: slide.content }}
              />
            </Slide>
          ))}
        </Slider>
        {data.map(slide => (
          <DotDot slide={slide.id} key={slide.id} />
        ))}
        <GlobalStyle />
      </CarouselContainer>
    )
  }
}

const CarouselContainer = styled(CarouselProvider)`
  display: block;
  height: 100%;
  width: 100%;
`

const DotDot = styled(Dot)`
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  width: 6rem;
`

const GlobalStyle = createGlobalStyle`
  .carousel__dot--selected {
    border-color: #404471;
  }

.carousel__slide--visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}

.carousel__slide--hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.7s, opacity 0.7s linear;
}
`

export default Carousel
