import React, { Component } from 'react'
import './FormElementWrapper.css'
import PropTypes from 'prop-types'
import FormInputErrors from 'ui/Form/FormInputErrors'

export default class FormElementWrapper extends Component {
  render () {
    const {
        props: {
          children,
          label
        },
        getErrors
      } = this,
      input_errors = getErrors() || []

    return (
      <div className='FormElementWrapper'>
        <label>
          <div>{label}</div>
          <div className='FormElementWrapper-inner'>
            <div>
              {children}
            </div>
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
    errors: PropTypes.array
  }

}
