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
        register
      } = this

      return (
        <UserContext.Provider
          value={{
            ...this.state,
            authAttempt,
            logout,
            register
          }}
        >
          <WrappedComponent />
        </UserContext.Provider>
      )
    }

    authAttempt = (user_authorization_data) => {
      return Api.post('user/login', user_authorization_data, this, 'is_login_progress')
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
