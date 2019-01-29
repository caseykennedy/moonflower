import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import * as React from 'react'
import { Box, Text, Heading } from 'rebass'
import styled from 'styled-components'
import Section from '../Section'

import { isEmail } from 'validator'
import theme from '../../theme/theme'

interface Props {
  data: any
}

interface State {
  email: string
  submitted: boolean
}

// const required = (value, props) => {
//   if (!value || (props.isCheckable && !props.checked)) {
//     return <span className='form-error is-visible'>Required</span>
//   }
// }

const emailaddress = value => {
  if (!isEmail(value)) {
    return (
      <span className='form-error is-visible'>
        ${value} is not a valid email.
      </span>
    )
  }
}

const encode = (obj: any) => {
  return Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')
}

export class EmailCapture extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { email: '', submitted: false }
  }
  handleSubmit = e => {

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'kowabunga', ...this.state })
    }).then(res => {
      this.setState({ submitted: true })
    })

    e.preventDefault()
  }

  handleChange = e => {
    this.setState({ email: e.currentTarget.value })
  }

  public render() {
    const { email } = this.state
    const {} = this.props
    return (
      <Section bg='lunar' py={200}>
        <Box css={{ textAlign: 'center', margin: '0 auto' }} width={'40%'}>
          <Heading as='h2' fontSize={8} mb={0} color='pulse'>
            Sweet deals &amp; updates?
          </Heading>
          <Text as='p' fontSize={4} color='pulse' mb={4}>
            Feel free to subscribe for unbeatable deals and the occasional
            company updates.
          </Text>
          {!this.state.submitted && (
            <Form
              name='emailcapture'
              method='post'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={this.handleSubmit}
            >
              <StyledInput
                placeholder='Email'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                validations={[emailaddress]}
              />
              <SubmitButton className='button'>Submit</SubmitButton>
            </Form>
          )}
          {this.state.submitted && (
            <Box>
              <p>Thanks for subscribing!</p>
              <p>Check your email for a confirmation message.</p>
            </Box>
          )}
        </Box>
      </Section>
    )
  }
}

const StyledInput = styled(Input)`
  border: 2px solid;
  line-height: 2;
  font-size: 2rem;
  padding: 1rem 3rem;
`

const SubmitButton = styled(Button)`
  background-color: ${p => theme.colors.pulse};
  color: ${p => theme.colors.paleMoon};
  line-height: 2;
  font-size: 2rem;
  padding: 1rem 3rem;
`

export default EmailCapture
