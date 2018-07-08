import React, { Component } from 'react'
import userContextConnection from 'context/User/userContextConnection'
import PageWrapper from 'components/PageWrapper'
import PropTypes from 'prop-types'
import Container from 'components/Container'

@userContextConnection
export default class ProfileContainer extends Component {
  render () {

    const {
      props: {
        name,
        email,
        is_admin
      }
    } = this

    return (
      <PageWrapper>
        <Container>
          <h1>{name}</h1>
          {is_admin && <h2>Администратор</h2>}
          {email}
        </Container>
      </PageWrapper>
    )
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    is_admin: PropTypes.bool,
  }

}
