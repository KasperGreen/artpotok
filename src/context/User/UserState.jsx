import React, { Component } from 'react'
import user_initial_state from 'context/User/user_initial_state'
import UserContext from './UserContext'
import Api from 'api/Api'
import localforage from 'localforage'

export default function (WrappedComponent) {
  return class UserState extends Component {
    state = user_initial_state

    render () {
      const {
        authAttempt,
        logout,
        register,
        hasRole,
        hasAnyRole
      } = this

      return (
        <UserContext.Provider
          value={{
            ...this.state,
            authAttempt,
            logout,
            register,
            hasRole,
            hasAnyRole
          }}
        >
          <WrappedComponent />
        </UserContext.Provider>
      )
    }

    authAttempt = (user_authorization_data) => {
      return Api.post('user/login', user_authorization_data, this, 'is_login_progress')
    }
    hasAnyRole = (roles_array) => {
      const {
        state: {
          roles = []
        }
      } = this

      return roles.find(role => roles_array.includes(role)) ? true : false
    }
    hasRole = (role_name) => {
      const {
        state: {
          roles = []
        }
      } = this

      return roles.includes(role_name)
    }
    logout = () => {
      return Api.get('user/logout', this, 'is_logout_progress')
    }
    register = (registration_data) => {
      return Api.post('user/register', registration_data, this, 'is_register_progress')
    }

    componentDidMount () {

      localforage.getItem(this.constructor.name).then((data) => {
        if (data) {
          this.setState(data)
        }
      })
      Api.get('user', this, 'is_user_loading')

    }

  }
}
