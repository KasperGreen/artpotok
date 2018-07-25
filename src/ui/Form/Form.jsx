import React, { Component } from 'react'
import form_initial_state from 'ui/Form/data/form_initial_state'
import PropTypes from 'prop-types'
import FormContext from 'ui/Form/FormContext'
import FormProgress from 'ui/Form/FormProgress'
import Text from 'templates/Text'

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
          <Text>
            {children}

            {typeof progress === 'number' && <FormProgress percent={progress} />
            }
          </Text>
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

  componentDidMount () {
    const {
      props: {
        default_form_data
      }
    } = this

    if (default_form_data) {
      this.setState(
        (state) => {
          return {
            ...state,
            form: default_form_data
          }
        }
      )
    }
  }

  static defaultProps = {
    onSubmit: (data) => {
      console.log('onSubmit метод не задан у формы. Переданные данные в обработчик: → ', data, ' ← data | ')

    },
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
    default_form_data: PropTypes.object,
    errors: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.bool
      ]
    ),
    progress: PropTypes.oneOfType(
      [
        PropTypes.number,
        PropTypes.bool
      ])
  }

}
