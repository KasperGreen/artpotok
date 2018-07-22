import React, { Component } from 'react'
import './FormProgress.css'
import PropTypes from 'prop-types'

export default class FormProgress extends Component {
  render () {
    const {
      props: {
        percent
      }
    } = this
    if (!percent || percent === 100) return false
    return (
      <div className='FormProgress'>
        <div className='FormProgress-bar' style={{width: percent + '%'}} />
      </div>
    )
  }

  static propTypes = {
    percent: PropTypes.oneOfType(
      [
        PropTypes.bool,
        PropTypes.number
      ]
    ),
  }

}
