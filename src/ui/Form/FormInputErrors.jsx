import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormInputErrors extends Component {
  render () {
    const {
      props: {
        errors
      }
    } = this
    if (!errors) return false
    return (
      <ul className='FormInput-errors'>
        {errors.map((error, key) => {
          return (
            <li key={key} className='FormInput-errors-error'>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }

  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.node),
  }

}
