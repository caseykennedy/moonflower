import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Slider from '../components/Slider'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import Separator from '../components/Separator'

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
      <Layout>
        <PageTitle
          bg='singularity'
          pt={[135]}
          pb={[2, 3, 4, 4]}
          px={[2, 3, 4, 4]}
          alignItems='flex-end'
        >
          <Box width={[9 / 10, 1 / 2, 1 / 2]} pt={'40rem'}>
            <Fade>
              <Heading
                as='h1'
                pb={0}
                lineHeight={1.1}
                fontSize={[5, 6, 7, 7]}
                color='paleMoon'
              >
                <strong>Marin County’s</strong> premier online dispensary,
                delivered to you.
              </Heading>
            </Fade>
          </Box>
        </PageTitle>

        <Slider data={data} />

        {/* <Section bg='#161623' pageWidth={'100%'} py={[8]}>
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
                    <StyledLink href='https://doctor.to/moonflower' target='_blank'>
                      book an appointment
                    </StyledLink>
                  </Text>
                </Box>
              </Flex>
            </Fade>
          </Box>
        </Section> */}

        <Separator />

        <Section bg='singularity' pageWidth={'100%'} px={0} py={0}>
          <Flex width={1} alignItems='stretch' flexDirection='column' id='shop'>
            <Box width={1} py={8} px={[2, 3, 4, 4]}>
              <Text
                as='h6'
                fontSize={'1.2rem'}
                color='lavendar'
                letterSpacing='0.3rem'
                textAlign='center'
              >
                Phone orders
              </Text>
              <Text
                as='p'
                fontSize={8}
                mb={4}
                color='paleMoon'
                textAlign='center'
              >
                <strong>+1 (707) 760 9566</strong>
              </Text>

              <Text
                as='h6'
                fontSize={'1.2rem'}
                color='lavendar'
                letterSpacing='0.3rem'
                textAlign='center'
              >
                Bureau of Cannabis Control | License Number: C9-18-0000070-TEMP
              </Text>

              <Text
                as='h6'
                fontSize={'1.2rem'}
                color='lavendar'
                letterSpacing='0.3rem'
                textAlign='center'
              >
                Must be over the age of 18 and have your medical cannabis
                doctors recommendation to order from Moonflower.
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
      </Layout>
    )
  }
}

const PageTitle = styled(Flex)`
  height: 40rem;

  & h1 {
    font-weight: 300;
  }
`

const StyledLink = styled.a`
  border-bottom: 2px solid ${p => p.theme.colors.ogPurp};
  color: currentColor;
  text-decoration: none;
  padding-bottom: 0.1rem;

  &:hover {
    border-color: currentColor;
  }
`

export default IndexPage
