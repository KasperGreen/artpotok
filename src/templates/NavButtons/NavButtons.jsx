import React, { Component } from 'react'
import './NavButtons.css'
import Decorator from 'decorators/Decorator'

export default class NavButtons extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <Decorator {...this.props}>
        <nav className='NavButtons'>
          {children}
        </nav>
      </Decorator>
    )
  }
}
