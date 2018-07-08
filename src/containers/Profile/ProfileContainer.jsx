import React, { Component } from 'react'
import userContextConnection from 'context/User/userContextConnection'
import PageWrapper from 'components/PageWrapper'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { LOGOUT_URL } from 'constants/URL'

@userContextConnection
export default class ProfileContainer extends Component {
  render () {

    const {
      props: {
        name,
        email,
        is_admin,
        roles
      }
    } = this

    return (
      <PageWrapper>
        <Container>
          <h1>{name}</h1>
          {is_admin && <h2>Это профиль администратора</h2>}
          <div>
            <strong>Почта:</strong> {email}
          </div>
          <div>
            <strong>Роли:</strong> {roles.join(', ')}
          </div>
          <div>
            <Link to={LOGOUT_URL}>Выйти из профиля</Link>
          </div>
        </Container>
      </PageWrapper>
    )
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    is_admin: PropTypes.bool,
    roles: PropTypes.arrayOf(PropTypes.string)
  }

}
