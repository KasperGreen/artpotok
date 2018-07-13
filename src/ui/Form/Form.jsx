import React, { Component } from 'react'
import form_initial_state from 'ui/Form/data/form_initial_state'
import PropTypes from 'prop-types'
import FormContext from 'ui/Form/FormContext'
import FormProgress from 'ui/Form/FormProgress'

export default class Form extends Component {

  state = form_initial_state

  render () {
    const {
      props: {
        children,
        errors,
        progress,
        ...other_props
      },
      onSubmit
    } = this
    return (
      <FormContext.Provider
        value={{
          ...this.state,
          ControlledComponent: this,
          errors
        }}
      >
        <form {...{
          ...other_props,
          onSubmit
        }}
        >
          {children}

          {typeof progress === 'number' && <FormProgress percent={progress} />
          }
        </form>
      </FormContext.Provider>
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {
      props: {
        onSubmit
      },
      state: {
        form
      }
    } = this
    onSubmit(form)
  }

  static defaultProps = {
    onSubmit: (data) => {
      console.log('onSubmit метод не задан у формы. Переданные данные в обработчик: → ', data, ' ← data | ')

    },
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func
  }

}
