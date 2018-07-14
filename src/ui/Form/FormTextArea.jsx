import React, { Component } from 'react'
import FormContextConnector from 'ui/Form/FormContextConnector'
import InputHandlers from 'decorators/InputHandlers'
import PropTypes from 'prop-types'
import './FormTextArea.css'
import FormElementWrapper from 'ui/Form/FormElementWrapper'

@FormContextConnector
export default class FormTextArea extends Component {
  render () {

    const {
      props: {
        label,
        form,
        errors,
        ...other_props
      },
    } = this

    return (
      <FormElementWrapper {...this.props}>
        <InputHandlers {...{
          ...other_props
        }}
        >
          <textarea ref={this.element} />
        </InputHandlers>
      </FormElementWrapper>
    )
  }

  element = React.createRef()
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.node,
    ControlledComponent: PropTypes.object
  }

}
