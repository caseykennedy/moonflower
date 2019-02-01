import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints'
import { Box, Heading, Flex, Text } from 'rebass'
import Fade from 'react-reveal/Fade'
import Iframe from 'react-iframe'

import Section from '../components/Section'
import Separator from '../components/Separator'
import TextLink from '../components/TextLink'

interface Props {}

const ShopPage: React.SFC<Props> = () => (
  <Layout>
    <Flex bg='darkSky' pt={95} pb={4} px={[2, 3, 4, 4]} alignItems='flex-end'>
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

    <Separator />

    <Section bg='#161623' pageWidth={'100%'} px={0} py={0}>
      <Flex width={1} alignItems='stretch' flexDirection='column' id='shop'>
        <Box width={1} py={8} px={[2, 3, 4, 4]} css={{ textAlign: 'center' }}>
          <Text as='p' fontSize={6} pb={1} color='paleMoon'>
            phone orders: <strong>+1 (707) 731 1337</strong>
          </Text>

          <Text
            as='p'
            fontSize={'1.3rem'}
            color='lavendar'
            letterSpacing='0.3rem'
            css={{ textTransform: 'uppercase', fontWeight: 500 }}
          >
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
            url=''
            allowFullScreen
          />
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default ShopPage
