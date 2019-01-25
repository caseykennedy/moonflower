import * as React from 'react'
import { Box, Flex, Text, Heading } from 'rebass'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import Carousel from '../../components/Carousel'
import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'

import IconCc from '../../assets/icon-card.svg'
import IconProcess from '../../assets/icon-processing.svg'
import IconDelivery from '../../assets/icon-delivery.svg'

import data from './data/slides.json'

interface IntroProps {
  children?: any
}

const Intro: React.SFC<IntroProps> = ({ children }) => (
  <Section pageWidth={1360}>
    <Flex width={1} alignItems='baseline' flexWrap='wrap' pb={0}>
      <Fade>
        <Box width={[1, 1, 1, 6 / 8]} px={[4, 6, 8]} py={[6, 10, 200]} mb={3}>
          <Heading
            as='h2'
            fontSize={[6, 7, 8, 8]}
            pb={0}
            color='pulse'
          >
            How does <strong>moonflower</strong> work? Doc, she's beautiful.
            She's crazy about me. Look at this, look what she wrote me, Doc.
            That says it all. Doc, you're my only hope.
          </Heading>
        </Box>
      </Fade>
      <Fade bottom cascade distance='2rem'>
        <Box width={1} mb={0}>
          <Heading
            as='h4'
            color='superNova'
            px={1}
            pt={1}
            pb={'0.8rem'}
            bg='pulse'
            fontSize={2}
            css={{ fontWeight: 500 }}
          >
            How it works
          </Heading>
        </Box>
        <Flex
          width={[1]}
          flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
          alignItems='stretch'
        >
          <Card p={[2, 3, 4, 4]} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
            <CardIcon />
            <Heading
              as='h4'
              fontSize={6}
              color='pulse'
              pb={4}
              mb={80}
              css={{ alignSelf: 'flex-start' }}
            >
              Must have a<br />
              valid ID &amp; medical card
            </Heading>
            <Text
              as='p'
              fontSize={4}
              mb={0}
              color='pulse'
              css={{ alignSelf: 'flex-end' }}
            >
              Patients are responsible for having an ID and medical cannabis
              card from a doctor. The patients then can contact Moonflower via
              phone or online to make an order.
            </Text>
          </Card>
          <Card p={[2, 3, 4, 4]} mr={[0, 0, 4, 4]} mb={[2, 4, 0, 0]}>
            <IconProcessing />
            <Heading
              as='h4'
              fontSize={6}
              color='pulse'
              pb={4}
              mb={80}
              css={{ alignSelf: 'flex-start' }}
            >
              Verification
              <br />
              &amp; processing
            </Heading>
            <Text
              as='p'
              fontSize={4}
              mb={0}
              color='pulse'
              css={{ alignSelf: 'flex-end' }}
            >
              Moonflower must verify each patient and upon completion can pack
              up the order and get ready for delivery
            </Text>
          </Card>
          <Card p={[2, 3, 4, 4]}>
            <IconTruck />
            <Heading
              as='h4'
              fontSize={6}
              color='pulse'
              pb={4}
              mb={80}
              css={{ alignSelf: 'flex-start' }}
            >
              Shop
              <br />
              online &amp; delivery
            </Heading>
            <Text
              as='p'
              fontSize={4}
              mb={0}
              color='pulse'
              css={{ alignSelf: 'flex-end' }}
            >
              Delivered directly to you either at work, home, anywhere with an
              address really. Driver’s will check ID on on arrival for first
              time orders. Payment occurs at the delivery. Drivers do not carry
              excess change or product.
            </Text>
          </Card>
        </Flex>
      </Fade>
    </Flex>
  </Section>
)

Intro.defaultProps = {}

const Container = styled(Flex)`
  flex-wrap: wrap;

  ${between('0', '1')} {
  }
  ${between('1', '2')} {
  }
  ${up('2')} {
  }
`

const CardIcon = styled(IconCc)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const IconProcessing = styled(IconProcess)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const IconTruck = styled(IconDelivery)`
  width: 6rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`

const BoxHide = styled.span`
  display: none;

  ${up('1')} {
    display: inline-block;
  }
`

const Card = styled(Box)`
  background-color: ${p => p.theme.colors.lunar};
  flex-grow: 1;
  transition: all 0.4s ease-out;

  &:hover {
    background-color: ${p => p.theme.colors.superNova};
    box-shadow: 0 0 7rem rgba(0, 0, 0, 0.06);
  }
`

export default Intro
