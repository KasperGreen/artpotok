import React, { Component } from 'react'
import './FormElementWrapper.css'
import PropTypes from 'prop-types'
import FormInputErrors from 'ui/Form/FormInputErrors'
import classNames from 'classnames'

export default class FormElementWrapper extends Component {
  render () {
    const {
        props: {
          children,
          label,
          checkbox
        },
        getErrors
      } = this,
      input_errors = getErrors() || []

    return (
      <div
        className={classNames(
          'FormElementWrapper',
          {checkbox}
        )}
      >
        <label>
          <div className='FormElementWrapper-label'>
            {label}
          </div>
          <div className='FormElementWrapper-input-wrapper'>
            {children}
          </div>
          <div className='FormElementWrapper-errors'>
            <FormInputErrors {...{errors: input_errors}} />
          </div>
        </label>
      </div>
    )
  }

  getErrors = () => {
    const {
      props: {
        name,
        errors: {
          [name]: input_errors
        } = {}
      }
    } = this

    return input_errors
  }

  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    errors: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.bool
      ]
    )
  }

}
