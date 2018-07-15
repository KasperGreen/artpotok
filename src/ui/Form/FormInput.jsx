import React, { Component } from 'react'
import FormContextConnector from 'ui/Form/FormContextConnector'
import InputHandlers from 'decorators/InputHandlers'
import PropTypes from 'prop-types'
import './FormInput.css'
import FormElementWrapper from 'ui/Form/FormElementWrapper'

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
      } = this,
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
      <FormElementWrapper {...this.props}>
        <InputHandlers {...{
          ...additional_props,
          ...other_props
        }}
        >
          <input ref={this.element} />
        </InputHandlers>
      </FormElementWrapper>
    )
  }

  element = React.createRef()
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
    pattern: PropTypes.string,
    ControlledComponent: PropTypes.object
  }

}
