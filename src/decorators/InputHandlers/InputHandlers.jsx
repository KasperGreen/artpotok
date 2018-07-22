import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Decorator from 'decorators/Decorator'

//TODO переехать на InputHelperClass из Range
export default class InputHandlers extends PureComponent {

  render () {
    const {
        props: {
          children,
          ControlledComponent,
          onInputChange,
          onUpdateObject,
          onUpdateValue,
          active_value,
          onChangeValue,

          ...props
        },
        onChange,
        getValueObjectData,
      } = this,
      result_props = {
        ...props,
        ...getValueObjectData()
      }

    if (props.type === 'file') {
      delete result_props.value
      delete result_props.defaultValue
    }

    return (
      <Decorator {...{onChange}}>
        <Decorator {...result_props} >
          {children}
        </Decorator>
      </Decorator>
    )
  }

  getValueObjectData = () => {
    const {
        props: {
          name,
          ControlledComponent: {
            state: {
              form: {
                [name]: value = ''
              },
            }
          }
        }
      } = this

    return {name, value}
  }

  onChange = (e) => {
    const {
      props: {
        type,
        multiple
      }
    } = this
    const {value, files, checked} = e.target

    let result_value = value

    if (type === 'checkbox') {
      result_value = checked

    } else if (type === 'file') {
      result_value = multiple ? files : files[0]
    }

    this.onChangeValue(result_value)
  }

  onChangeValue = (value) => {

    const {
      props:
        {
          name,
          onInputChange,
          onUpdateValue,
          onUpdateObject,
          ControlledComponent
        },
    } = this

    onInputChange(name, value)
    onUpdateObject({[name]: value})
    onUpdateValue(value)
    if (ControlledComponent) {
      ControlledComponent.setState(
        (state) => {
          return {
            ...state,
            form: {
              ...state.form,
              [name]: value
            }
          }
        }
      )
    }

  }

  static defaultProps = {
    onInputChange: () => {
    },
    onUpdateValue: () => {
    },
    onUpdateObject: () => {
    },
    name: 'unknown_name_field'
  }
  static propTypes = {
    children: PropTypes.element.isRequired,
    onInputChange: PropTypes.func,
    name: PropTypes.string,
    onUpdateValue: PropTypes.func,
    ControlledComponent: PropTypes.object,
    onUpdateObject: PropTypes.func,
    value: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number,
        (props, prop_name, component_name) => {
          const value = props[prop_name]

          if (!(_.isObject(value) && _.size(value) === 1)) {
            return new Error(
              'Invalid prop `' + prop_name + '` supplied to' +
              ' `' + component_name + '`. Validation failed. Object length must be 1 '
            )
          }

        }
      ])
  }

}
