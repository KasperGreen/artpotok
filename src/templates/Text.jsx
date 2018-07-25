import React, { Component } from 'react'
import './Text.css'
import Decorator from 'decorators/Decorator'

export default class Text extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <Decorator {...this.props}>
        <div className='Text'>
          {children}
        </div>
      </Decorator>
    )
  }
}
