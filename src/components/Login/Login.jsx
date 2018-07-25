import React, { Component } from 'react'
import './Login.css'
import Container from 'components/Container'
import { Link, Redirect } from 'react-router-dom'
import { REGISTER_URL } from 'constants/URL'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import Button from 'components/Button'

export default class Login extends Component {
  state = {
    email: 'admin@test.ru',
    password: 'test',
    remember: true
  }

  render () {
    const {
      onSubmit,
      props: {
        is_login_progress,
        error_text,
        is_logged_in
      }
    } = this
    if (is_logged_in) {
      return <Redirect to={'/profile'} />
    }
    return (
      <div className='Login'>
        <Container>
          <Form {...{onSubmit}}>
            <div className='Login-errors'>
              {error_text}
            </div>
            <div>
              <FormInput
                label={'Почта'}
                name={'email'}
                autoComplete='username'
                placeholder={'example@email.com'}
              />
            </div>
            <div>
              <FormInput
                label={'Пароль'}
                password
                autoComplete='current-password'
                name={'password'}
              />
            </div>
            <div>
              <FormInput
                checkbox
                name={'remember'}
                label={'Запомнить'}
              />
            </div>
            <nav>
              <ul className='Login-buttons'>
                <li>
                  <Button>
                    <Link to={REGISTER_URL}>Регистрация</Link>
                  </Button>
                </li>
                <li>
                  <Button disabled={is_login_progress}>Войти</Button>
                </li>
              </ul>
            </nav>
          </Form>
        </Container>
      </div>
    )
  }

  onChange = (e) => {
    const value = e.target.value,
      name = e.target.name
    this.setState(
      (state) => {
        return {
          ...state,
          [name]: value
        }
      }
    )

  }
  onCheckboxChange = (e) => {
    const value = e.target.value,
      name = e.target.name

    this.setState(
      (state) => {
        return {
          ...state,
          [name]: this.state[name] ? false : value
        }
      }
    )

  }
  onSubmit = (user_data) => {
    const {
      props: {
        authAttempt
      },
    } = this

    authAttempt(user_data)
      .then((response_data) => {
        console.log(' → ', response_data, ' ← response_data | ')

      })

  }
}
