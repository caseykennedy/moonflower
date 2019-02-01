import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Slider from '../components/Slider'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import Separator from '../components/Separator'

import LogoSymbol from '../components/LogoSymbol'
import Iframe from 'react-iframe'

import data from '../assets/data/slides.json'

interface Props {}

interface State {
  random: number
}

export class IndexPage extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props)

  //   this.state = {
  //     random: 0
  //   }
  // }

  // resetIframe = () => {
  //   this.setState({ random: this.state.random + 1 })
  // }

  public render() {
    const {} = this.props
    return (
      <React.Fragment>
        <PageTitle
          bg='#161623'
          pt={[135]}
          pb={[2, 3, 4, 4]}
          px={[2, 3, 4, 4]}
          alignItems='flex-end'
          css={{
            height: '58rem'
          }}
        >
          <Box width={[9 / 10, 1 / 2, 1 / 2]}>
            <Fade>
              <Heading
                as='h1'
                pb={0}
                lineHeight={1.1}
                fontSize={[5, 6, 8, 8]}
                color='paleMoon'
                css={{
                  fontWeight: 300
                }}
              >
                <strong>Marin County’s</strong> premier online dispensary,
                delivered to you.
              </Heading>
            </Fade>
          </Box>
        </PageTitle>

        <Slider data={data} />

        <Section bg='#161623' pageWidth={'100%'} py={[8, 100, 160]}>
          <Box>
            <Fade distance='2rem' bottom>
              <Flex width={1} justifyContent='center' alignItems='center' flexWrap='wrap'>
                <Box width={[1, 1, 8 / 10, 8 / 10]} pb={[2, 2, 0, 0]}>
                  <Text
                    as='p'
                    mb={0}
                    color='lavendar'
                  >
                    <Text
                      as='span'
                      color='paleMoon'
                    >
                      Need a medical cannabis card?
                    </Text>
                    <br />
                    It's easy to get an online medical recommendation from the
                    comfort of your own home.
                  </Text>
                </Box>
                <Box width={[1, 1, 2 / 10, 2 / 10]}>
                  <Text as='p' color='paleMoon' textAlign=''>
                    <TextLink to='/'>
                      book an appointment
                    </TextLink>
                  </Text>
                </Box>
              </Flex>
            </Fade>
          </Box>
        </Section>

        <Separator />

        <Section bg='darkSky' pageWidth={'100%'} px={0} py={0}>
          <Flex width={1} alignItems='stretch' flexDirection='column' id='shop'>
            <Box width={1} py={8} px={[ 2, 3, 4, 4 ]}>
              <Text as='p' fontSize={6} pb={1} color='paleMoon' textAlign='center'>
                phone orders: <strong>+1 (707) 731 1337</strong>
              </Text>

              <Text as='h6' fontSize={'1.3rem'} color='lavendar' letterSpacing='0.3rem' textAlign='center'>
                Bureau of Cannabis Control | License Number: C9-18-0000070-TEMP
              </Text>
            </Box>
            <Separator />
            <Box width={1}>
              <Iframe
                id='blazeIframe'
                frameborder='0'
                width='100%'
                height='110vh'
                display='initial'
                position='relative'
                // onLoad={this.resetIframe}
                url=''
                allowFullScreen
              />
            </Box>
          </Flex>
        </Section>
      </React.Fragment>
    )
  }
}

const PageTitle = styled(Flex)`
  height: 58rem;

  & h1 {
    font-weight: 300;
  }
`

export default withLayout(IndexPage)
