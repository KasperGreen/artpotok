import React, { Component } from 'react'
import './ActionButton.css'
import Decorator from 'decorators/Decorator'
import Interface from 'containers/Interface'

export default class ActionButton extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <Interface need_admin>
        <div className='ActionButton'>
          <Decorator className='ActionButton-button'>
            {children}
          </Decorator>
        </div>
      </Interface>
    )
  }
}
