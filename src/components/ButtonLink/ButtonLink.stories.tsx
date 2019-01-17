import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { wInfo } from '../../.storybook/utils.js'
import { text } from '@storybook/addon-knobs/react'
import { shopifyUrl } from '../../utils'
import ButtonLink from './'
import Section from '../Section'

const stories = storiesOf('Components', module)

stories.add(
  'Button',
  wInfo(`

  ### Notes
  Button

  ### Usage
  ~~~js
  <ButtonLink
    look="primary | dark | light"
    size="default | small | big"
    variant="solid | outline | block"
    radius={1}
    toLegacySite={false}
    to={shopifyUrl("pages/mattress-collections")}>
    Shop Now
  </ButtonLink>

  <Section bg="Sky | Luna | SpaceDust | string">
  ~~~`)(() => (
    <Section py={10} bg={text('sectionBg', 'Sky')}>
      <ButtonLink
        look={text('look', 'primary')}
        size={text('size', 'default')}
        variant={text('variant?', 'solid')}
        radius={text('radius?', '0')}
        toLegacySite={text('toLegacySite', 'false')}
        to={text('to', 'pages/mattress-collections')}
      >
        {text('buttonText', 'Discover The Pod')}
      </ButtonLink>
    </Section>
  ))
)
