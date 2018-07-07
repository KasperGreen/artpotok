import React, { Component } from 'react'
import './Confirmed.css'
import PropTypes from 'prop-types'

export default class Confirmed extends Component {
  state = {
    confirmed: false
  }

  render () {
    const {
      props: {
        children,
        content
      },
      state: {
        confirmed
      },
      confirm
    } = this
    return (
      confirmed
      ?
      children
      :
      <div className='Confirmed'>
        <div>
          {content}
        </div>
        <button onClick={confirm}> Уверен!</button>
      </div>

    )
  }

  confirm = () => {
    this.setState(
      {
        confirmed: true
      })
  }
  static propTypes = {
    content: PropTypes.node,
  }

}
