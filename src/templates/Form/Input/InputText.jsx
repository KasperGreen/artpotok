import React, { Component } from 'react'
import Input from 'templates/Form/Input/Input'
import PropTypes from 'prop-types'

export default class InputText extends Component {
  render () {
    return (
      <Input
        type={'text'}
        {...this.props}
      />
    )
  }

  static propTypes = {
    value: PropTypes.any,
    ControlledComponent: PropTypes.object
  }

}
