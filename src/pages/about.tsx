import { Link } from 'gatsby'
import * as React from 'react'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Fade from 'react-reveal/Fade'

import Section from '../components/Section'
import LogoSymbol from '../components/LogoSymbol'

interface Props {}

const AboutPage: React.SFC<Props> = () => (
  <React.Fragment>
    <Flex
      bg='darkSky'
      pt={[135]}
      pb={4}
      px={[2, 3, 4, 4]}
      alignItems='flex-end'
      css={{
        height: '80vh'
      }}
    >
      <Box width={[1, 1, 1 / 2]}>
        <Fade>
          <Heading
            as='h2'
            lineHeight={1.1}
            fontSize={[6, 7, 8, 8]}
            color='paleMoon'
            css={{
              fontWeight: 300
            }}
          >
            <strong>moonflower</strong> delivery was created by passionate
            cannabis enthusiasts that have used cannabis to help find the light
            in the darkest of times.
          </Heading>
        </Fade>
      </Box>
    </Flex>

    <Section
      bg='darkSky'
      pageWidth={'100%'}
      bgImage='https://res.cloudinary.com/moonflower/image/upload/v1548102305/bg-square.jpg'
    >
      <Box py={200}>
        <Fade distance='2rem' bottom>
          <Flex width={1} justifyContent='center'>
            <Box width={[1, 2 / 3, 1 / 2, 1 / 2]} p={[2, 4, 6, 6]}>
              <Box width={1} css={{ textAlign: 'center' }}>
                <LogoSymbol width={80} fill='white' />
              </Box>
              {/* <Heading
                as='h2'
                fontSize={[4, 5, 6, 6]}
                color='pulse'
                textAlign='center'
                pb={0}
              >
                Now delviering in Marin &amp; Sonoma
              </Heading> */}
            </Box>
          </Flex>
        </Fade>
      </Box>
    </Section>

    <Section bg='superNova'>
      <Flex
        css={{ maxWidth: 1360 }}
        alignItems='center'
        flexWrap='wrap'
        mb={160}
      >
        <Box width={[1, 2 / 3, 1 / 2]} pr={4}>
          <Fade>
            <Heading as='h2' fontSize={[6]} pb={8}>
              Spread
              <br />
              the love
            </Heading>
            <Text as='p' fontSize={[6]} pb={[8, 0, 0]}>
              We have seen how cannabis has benefited the closest ones around us
              and in return, have been inspired to spread our love for the
              plant, while making a positive impact within our community.
            </Text>
          </Fade>
        </Box>
        <Box width={[1, 1 / 3, 1 / 2]} pl={4} css={{ position: 'relative' }}>
          <ColorBox
            bg='white'
            width={1}
            css={{
              height: '160%',
              position: 'absolute',
              top: -80,
              left: 160,
              bottom: 0,
              right: 0,
              borderRadius: 999
            }}
          />
          <Fade distance='2rem' bottom>
            <img
              src='https://res.cloudinary.com/moonflower/image/upload/v1548906714/spread__love.jpg'
              alt='Cannabis benefits'
            />
          </Fade>
        </Box>
      </Flex>
      <Flex
        css={{ maxWidth: 1360 }}
        alignItems='center'
        flexWrap='wrap'
        flexDirection='row-reverse'
        mb={160}
      >
        <Box width={[1, 2 / 3, 1 / 2]} pl={4}>
          <Fade>
            <Heading as='h2' fontSize={[6]} pb={8}>
              A team
              <br />
              you can trust
            </Heading>
            <Text as='p' fontSize={[6]} pb={[8, 0, 0]}>
              We are experts within the fields of farming, tech, compliance,
              fashion and retail. We have a combined experience of over 20+
              years in the cannabis industry, and look forward to bringing
              unique, high-quality products, and first-class customer service to
              the Marin and Sonoma County.
            </Text>
          </Fade>
        </Box>
        <Box width={[1, 1 / 3, 1 / 2]} pr={4} css={{ position: 'relative' }}>
        <ColorBox
            bg='lunar'
            width={1}
            css={{
              height: '70%',
              position: 'absolute',
              top: -80,
              left: -80,
              bottom: 0,
              right: 0,
              borderRadius: 999
            }}
          />
          <Fade distance='2rem' bottom>
            <img
              src='https://res.cloudinary.com/moonflower/image/upload/v1548906714/trust__us.jpg'
              alt='You can trust us'
            />
          </Fade>
        </Box>
      </Flex>
      <Flex css={{ maxWidth: 1360 }} flexWrap='wrap'>
        <Box width={[1]} css={{ position: 'relative' }}>
          <Text as='span' fontSize={[6, 50, 60, 80]} textAlign='left'>
            <Fade><ColorBox
            bg='white'
            width={1}
            css={{
              height: '100%',
              position: 'absolute',
              top: -200,
              left: 300,
              bottom: 0,
              right: 0,
              borderRadius: 999,
              zIndex: 0
            }}
          />
              We work with cannabis brands that provide exceptional cannabis
              products across the Golden State. These companies align with our
              mission to ensure our customers have the best experience from the
              moment they receive their products at their doorstep. These brands
              may have different methods, sources, and processing, but their
              philosophy for making the most refined, consistent, and
              high-quality products they possibly can, all remains the same.
            </Fade>
          </Text>
            
        </Box>
      </Flex>
    </Section>

    {/* <Section bg='purpleRain' pageWidth={1360}>
      <Box mt={-120} p={4} bg='lunar'>
        <Fade distance='2rem' bottom>
          <Box width={1 / 2}>
            <Heading
              as='h2'
              fontSize={[6]}
              color='lavendar'
              css={{
                fontWeight: 300
              }}
            >
              <Text as='p' color='pulse' pb={4}>
                We have seen how cannabis has benefited the closest ones around
                us and in return, have been inspired to spread our love for the
                plant, while making a positive impact within our community.
              </Text>
              <Text as='p' color='pulse' pb={4}>
                Our team are experts within their respective fields in farming,
                tech, compliance, fashion and retail. We have a combined
                experience of over 20+ years in the cannabis industry, and look
                forward to bringing unique, high-quality products, and
                first-class customer service to the Marin and Sonoma County
                areas.
              </Text>
              <Text as='p' color='pulse'>
                We work with cannabis brands that provide the most exceptional
                cannabis products across the Golden State. These companies align
                with our mission to ensure our customers have the best
                experience from the moment they receive their products at their
                doorstep. These brands may have different methods, sources, and
                processing but philosophy for making the most refined,
                consistent, and highest-quality products they possibly can all
                remains the same.
              </Text>
            </Heading>
          </Box>
        </Fade>
      </Box>
    </Section> */}
  </React.Fragment>
)

const ColorBox = styled(Box)`
  
  /* background: -webkit-linear-gradient(
    to right,
    #202136,
    #11111b
  );
  background: linear-gradient(
    to right,
    #202136,
    #11111b
  ); */
`

export default withLayout(AboutPage)
