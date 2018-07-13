import React, { Component } from 'react'
import Input from 'templates/Form/Input/Input'

export default class InputEmail extends Component {
  render () {
    return (
      <Input
        type={'email'}
        placeholder={'email@example.com'}
        {...this.props}
      />
    )
  }
}
