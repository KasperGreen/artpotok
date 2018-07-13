import React, { Component } from 'react'
import Input from 'templates/Form/Input/Input'

export default class InputPassword extends Component {
  render () {
    return (
      <Input
        type={'password'}
        {...this.props}
      />
    )
  }
}
