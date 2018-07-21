import React, { Component } from 'react'
import './ActionButton.css'
import Decorator from 'decorators/Decorator'

export default class ActionButton extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='ActionButton'>
        <Decorator className='ActionButton-button'>
          {children}
        </Decorator>
      </div>
    )
  }
}
