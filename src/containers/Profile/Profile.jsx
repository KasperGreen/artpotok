import React, { Component } from 'react'
import userContextConnection from 'context/User/userContextConnection'
import PageWrapper from 'components/PageWrapper'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { LOGOUT_URL } from 'constants/URL'
import Button from 'components/Button/Button'
import './Profile.css'

@userContextConnection
export default class Profile extends Component {
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
        <div className='Profile'>
          <Container>
            <ul className='Profile-header'>
              <li>
                <h1>{name}</h1>
              </li>
              <li>
                <Button>
                  <Link to={LOGOUT_URL}>Выйти из профиля</Link>
                </Button>
              </li>
            </ul>

            {is_admin && <h2>Это профиль администратора</h2>}
            <p>
              <strong>Почта:</strong> {email}
            </p>
            <p>
              <strong>Роли:</strong> {roles.join(', ')}
            </p>

          </Container>
        </div>
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
