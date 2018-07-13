import React, { Component } from 'react'
import FormContextConnector from 'ui/Form/FormContextConnector'
import InputHandlers from 'decorators/InputHandlers'
import FormInputErrors from 'ui/Form/FormInputErrors'
import PropTypes from 'prop-types'
import './FormInput.css'
@FormContextConnector
export default class FormInput extends Component {
  render () {

    const {
        props: {
          label,
          number,
          phone,
          email,
          password,
          file,
          checkbox,
          form,
          errors,
          ...other_props
        },
        getErrors
      } = this,
      input_errors = getErrors() || [],
      additional_props = {
        type: 'text'
      }
    if (number) additional_props.type = 'number'
    else if (phone) additional_props.type = 'phone'
    else if (email) additional_props.type = 'email'
    else if (password) additional_props.type = 'password'
    else if (file) additional_props.type = 'file'
    else if (checkbox) additional_props.type = 'checkbox'

    return (
      <div className='FormInput'>
        <label>
          <div>{label}</div>
          <div className='FormInput-inner'>
            <InputHandlers {...{
              ...additional_props,
              ...other_props
            }}
            >
              <input ref={this.element} />
            </InputHandlers>
            <FormInputErrors {...{errors: input_errors}} />
          </div>

        </label>
      </div>
    )
  }

  element = React.createRef()
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
    phone: PropTypes.bool,
    checkbox: PropTypes.bool,
    number: PropTypes.bool,
    email: PropTypes.bool,
    file: PropTypes.bool,
    password: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.node,
    ControlledComponent: PropTypes.object
  }

}
