import React from 'react'
import FormContext from 'ui/Form/FormContext'

const FormContextConnector = (ConnectedComponent) => {
  return class extends React.Component {
    render () {
      return (
        <FormContext.Consumer>
          {(context) => {
            return (
              <ConnectedComponent
                {...{
                  ...this.props, ...context
                }}
              />
            )
          }}
        </FormContext.Consumer>
      )
    }

  }

}

export default FormContextConnector
