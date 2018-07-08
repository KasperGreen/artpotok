import React, { Component } from 'react'
import './Login.css'
import Container from 'components/Container'
import { Link, Redirect } from 'react-router-dom'
import { REGISTER_URL } from 'constants/URL'

export default class Login extends Component {
  state = {
    email: 'admin@test.ru',
    password: 'test',
    remember: true
  }

  render () {
    const {
      onSubmit,
      onChange,
      onCheckboxChange,
      state: {
        remember, password, email
      },
      props: {
        is_login_progress, error_text,
        is_logged_in
      }
    } = this
    if (is_logged_in) {
      return <Redirect to={'/profile'} />
    }
    return (
      <div className='Login'>
        <Container>
          <form {...{onSubmit}}>
            <div>
              <input
                autoComplete='username' {...{onChange}}
                type={'text'}
                value={email}
                name={'email'}
                placeholder={'email'}
              />
            </div>
            <div>
              <input
                autoComplete='current-password' {...{onChange}}
                type={'password'}
                value={password}
                name={'password'}
                placeholder={'password'}
              />
            </div>
            <div>
              <input {...{onChange: onCheckboxChange}} type={'checkbox'}
                     value={remember}
                     defaultChecked={remember}
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
          </form>
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
  onSubmit = (e) => {
    const {
      props: {
        authAttempt
      },
      state: {
        email,
        password,
        remember
      }
    } = this
    e.preventDefault()

    authAttempt(
      {
        email,
        password,
        remember
      }).then((data) => {
        console.log(' → ', data, ' ← data | ')

    })

  }
}
