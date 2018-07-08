import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import Register from 'components/Register'
import userContextConnection from 'context/User/userContextConnection'
import { Redirect } from 'react-router-dom'
import { PROFILE_URL } from 'constants/URL'

@userContextConnection
export default class RegisterContainer extends Component {

  render () {
    const {
      props: {
        is_logged_in
      }
    } = this
    if (is_logged_in) return <Redirect to={PROFILE_URL} />
    return (
      <PageWrapper>
        <Register />
      </PageWrapper>
    )
  }
}
