import React, { Component } from 'react'
import './Login.css'
import Container from 'components/Container'
import { Link, Redirect } from 'react-router-dom'
import { REGISTER_URL } from 'constants/URL'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'

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
              /> Запомнить
            </div>
            <div>
              {error_text}
            </div>
            <button disabled={is_login_progress}>Войти</button>
            <div>
              <Link to={REGISTER_URL}>Регистрация</Link>
            </div>
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
