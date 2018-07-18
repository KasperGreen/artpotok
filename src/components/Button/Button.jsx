import React, { Component } from 'react'
import './Button.css'
import Decorator from 'decorators/Decorator'

export default class Button extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <Decorator className='Button'>
        {children}
      </Decorator>
    )
  }
}
