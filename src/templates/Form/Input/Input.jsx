import React, { Component } from 'react'
import './Input.css'
import InputHandlers from 'decorators/InputHandlers'
import _ from 'lodash'

export default class Input extends Component {
  render () {
    const {
        props: {
          label,
          errors,
          ...other_props
        },
        getName,
        getValueObjectData,
        getErrors
      } = this,
      input_errors = getErrors() || []
    return (
      <div className='Input'>
        <label>
          <div>{label}</div>
          <div className='Input-inner'>
            <InputHandlers {...{...other_props, getName, getValueObjectData}}>
              <input />
            </InputHandlers>
            <div>{input_errors.map((error, key) => {
              return <div className='Input-error' key={key}>{error}</div>
            })}</div>
          </div>

        </label>
      </div>
    )
  }

  getErrors = () => {
    const {
      getName,
      props: {
        errors: {
          [getName()]: input_errors
        } = {}
      }
    } = this

    return input_errors
  }

  getName = () => {
    const {
        props: {
          name
        },
        getValueObjectData
      } = this,
      data_from_object = getValueObjectData()
    if (_.some(data_from_object)) {
      return data_from_object.name
    }
    return name
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
}
