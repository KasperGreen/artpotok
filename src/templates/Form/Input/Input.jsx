import React, { Component } from 'react'
import './Input.css'
import InputHandlers from 'decorators/InputHandlers'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default class Input extends Component {
  render () {
    const {
        props: {
          label,
          number,
          phone,
          email,
          password,
          file,
          required,
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

    return (
      <div className='Input'>
        <label>
          <div>{label}</div>
          <div className='Input-inner'>
            <InputHandlers {...{
              ...additional_props,
              ...other_props
            }}
            >
              <input ref={this.element} />
            </InputHandlers>
            <div>{input_errors.map((error, key) => {
              return <div className='Input-error' key={key}>{error}</div>
            })}</div>
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

  getValueObjectData = () => {
    const {
        props: {
          value,
          active_value
        },
        isValidValueObject
      } = this,
      result_object = {}

    if (isValidValueObject(value)) {
      result_object.name = _.keys(value)[0]
      result_object.value = _.values(value)[0]
    }

    if (isValidValueObject(active_value)) {

      result_object.name = _.keys(active_value)[0]
      result_object.active_value = _.values(active_value)[0]
    }

    return result_object
  }
  isValidValueObject = (value) => {

    return _.isObject(value) && _.size(value) === 1
  }

  static propTypes = {
    phone: PropTypes.bool,
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
