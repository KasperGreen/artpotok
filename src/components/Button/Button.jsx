import React, { Component } from 'react'
import './Button.css'
import Decorator from 'decorators/Decorator'
import PropTypes from 'prop-types'

export default class Button extends Component {
  render () {
    const {
      props: {
        children,
        ...other_props
      }
    } = this
    return (
      <Decorator
        className='Button'
      >
        <Decorator {...other_props} default_element_type={'button'}>
          {children}
        </Decorator>
      </Decorator>
    )
  }

  static propTypes = {
    disabled: PropTypes.oneOfType(
      [
        PropTypes.bool,
        PropTypes.number
      ]
    ),
    onClick: PropTypes.func
  }

}
