import React from 'react'

export default (Context) => (may_be_alias) => {
  if (typeof may_be_alias === 'string') {
    return (ComposedComponent) =>
      class extends React.Component {
        render () {
          return (
            <Context.Consumer>
              {(context) => {

                return (
                  <ComposedComponent
                    {...{
                      ...this.props, ...{[may_be_alias]: context}
                    }}
                  />
                )
              }}
            </Context.Consumer>
          )
        }

      }
  }

  else {
    const RealComponent = may_be_alias
    return class extends React.Component {
      render () {

        return (
          <Context.Consumer>
            {(context) => {

              return (
                <RealComponent
                  {...{
                    ...this.props, ...context
                  }}
                />
              )
            }}
          </Context.Consumer>
        )
      }

    }
  }
}


