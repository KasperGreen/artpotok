import React from 'react'
import UserContext from './UserContext'

const hoc = (ComposedComponent, alias = false) =>
  class extends React.Component {
    render () {
      return (
        <UserContext.Consumer>
          {(context) => {

            return (
              <ComposedComponent
                {...{
                  ...this.props, ...alias ? {[alias]: context} : context
                }}
              />
            )
          }}
        </UserContext.Consumer>
      )
    }

  }

const userContextConnection = function (container_or_params) {
  if (typeof container_or_params === 'string') {
    return HocComponent => {
      return hoc(HocComponent, container_or_params)
    }
  }
  return hoc(container_or_params)

}
export default userContextConnection
