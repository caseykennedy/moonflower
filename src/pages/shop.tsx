import { Link } from 'gatsby'
import * as React from 'react'
import { withLayout, LayoutProps } from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Fade from 'react-reveal/Fade'
import Iframe from 'react-iframe'

import Section from '../components/Section'
import LogoSymbol from '../components/LogoSymbol'

interface Props {}

const ShopPage: React.SFC<Props> = () => (
  <React.Fragment>
    <Flex
      bg='darkSky'
      pt={95}
      pb={4}
      px={[2, 3, 4, 4]}
      alignItems='flex-end'
    >
      {/* <Box width={[1, 1, 1 / 2]}>
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
      </Box> */}
    </Flex>

    <Section bg='lunar' pageWidth={'100%'} px={[0, 0, 4, 4]}>
        <Flex
          bg='superNova'
          width={1}
          py={[0, 2, 3, 4]}
          px={[0, 2, 3, 4]}
          alignItems='stretch'
          flexDirection='column'
          id='shop'
        >
          <Box width={1}>
            <Iframe
              id='blazeIframe'
              frameborder='0'
              width='100%'
              height='100vh'
              className='myClassname'
              display='initial'
              position='relative'
              allowFullScreen
            />
          </Box>
        </Flex>
    </Section>
  </React.Fragment>
)



export default withLayout(ShopPage)
