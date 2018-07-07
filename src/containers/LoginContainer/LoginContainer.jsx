import React, { Component } from 'react'
import Login from 'components/Login'
import PageWrapper from 'components/PageWrapper'
import userContextConnection from 'context/User/userContextConnection'

@userContextConnection
export default class LoginContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <Login {...this.props} />
      </PageWrapper>
    )
  }
}
