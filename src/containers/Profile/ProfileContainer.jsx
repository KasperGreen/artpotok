import React, { Component } from 'react'
import userContextConnection from 'context/User/userContextConnection'
import PageWrapper from 'components/PageWrapper'
import PropTypes from 'prop-types'

@userContextConnection
export default class ProfileContainer extends Component {
  render () {
    console.log(' → ', this.props, ' ← this.props | ')

    const {
      props: {
        name,
        email,
        is_admin
      }
    } = this

    return (
      <PageWrapper>
        <h1>{name}</h1>
        {is_admin && <h2>Администратор</h2>}
        {email}
      </PageWrapper>
    )
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    is_admin: PropTypes.bool,
  }

}
