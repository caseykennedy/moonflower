import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps, menuItems } from '../components/Layout'

import styled from 'styled-components'
import { Box, Heading } from 'rebass'

const IndexPage = () => (
  <React.Fragment>
    <Main bg='PurpleRain' width={1} py={100} px={3} color='White'>
      {/* <h1>Planetary existence</h1>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids. Let him go, Biff, you're drunk. I can't play. Shut
        your filthy mouth, I'm not that kind of girl. This sounds pretty heavy.
        But you're good, Marty, you're really good. And this audition tape of
        your is great, you gotta send it in to the record company. It's like
        Doc's always saying. Who, who? What's with the life preserver? Hi,
        Marty. Let's put him in there. Yeah. You're gonna be in the car with
        her. You'll find out.
      </p>
      <h2>Planetary existence</h2>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids.
      </p>
      <h3>Planetary existence</h3>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids.
      </p>
      <h4>Planetary existence</h4>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids.
      </p>
      <h5>Planetary existence</h5>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids.
      </p>
      <h6>Planetary existence</h6>
      <p>
        Right. Which one's your pop? No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids.
      </p> */}
    </Main>
  </React.Fragment>
)

const Main = styled(Box)`
  min-height: 84vh;
`

export default withLayout(IndexPage)
