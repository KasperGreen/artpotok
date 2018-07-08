import React, { Component } from 'react'
import Input from 'templates/Form/Input/Input'

export default class InputText extends Component {
  render () {
    return (
      <Input
        type={'text'}
        {...this.props}
      />
    )
  }
}
