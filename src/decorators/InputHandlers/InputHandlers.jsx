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
        getValueObjectData,
        getName,
        ...props
      },
      onChange,
      getDefaultValue,
    } = this

    return (
      <Decorator {...{onChange}}>
        <Decorator {...{
          ...props,
          ...getValueObjectData(),
          ...getDefaultValue(),

        }} >
          {children}
        </Decorator>
      </Decorator>
    )
  }

  getDefaultValue = () => {
    const {
      props: {
        defaultValue,
        value
      }
    } = this
    if (_.isUndefined(defaultValue) && _.isUndefined(value)) {
      return {defaultValue: ''}
    }
  }

  onChange = (e) => {
    const {value} = e.target
    this.onChangeValue(value)
  }
  onChangeValue = (value) => {

    const {
        props:
          {onInputChange, onUpdateValue, onUpdateObject, getName, ControlledComponent},
      } = this,
      name = getName()

    onInputChange(name, value)
    onUpdateObject({[name]: value})
    onUpdateValue(value)
    if(ControlledComponent) {
      ControlledComponent.setState(
        (state) => {
          return {
            ...state,
            ...{[name]: value}
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
