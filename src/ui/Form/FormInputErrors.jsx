import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FormInputErrors.css'
export default class FormInputErrors extends Component {
  render () {
    const {
      props: {
        errors
      }
    } = this
    if (!errors) return false
    return (
      <ul className='FormInputErrors'>
        {errors.map((error, key) => {
          return (
            <li key={key} className='FormInputErrors-error'>
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
