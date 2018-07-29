import React, { Component } from 'react'
import './FormWaitMessage.css'
import PropTypes from 'prop-types'

export default class FormWaitMessage extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='FormWaitMessage'>
        {children}
      </div>
    )
  }

  static defaultProps = {
    children: 'Идёт отправка данных…',
  }

  static propTypes = {
    children: PropTypes.node,
  }

}
