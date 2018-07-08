import React, { Component } from 'react'
import './Register.css'
import Container from 'components/Container'
import InputEmail from 'templates/Form/Input/InputEmail'
import InputPassword from 'templates/Form/Input/InputPassword'
import userContextConnection from 'context/User/userContextConnection'
import InputText from 'templates/Form/Input/InputText'

@userContextConnection
export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: {}
  }

  render () {
    const {
      props: {
        is_register_progress
      },
      state: {
        email,
        password,
        password_confirmation,
        name,
        errors
      },
      onUpdateObject,
      onSubmit
    } = this
    return (
      <div className='Register'>
        <Container>
          <form {...{onSubmit}} autoComplete="off">
            <h1>Регистрация</h1>
            <div>
              <InputText
                label={'Отображаемое имя'}
                autoComplete='usertitle'
                placeholder={'Иван Иванов'}
                value={{name}}
                required
                {...{onUpdateObject, errors}}
              />
            </div>
            <div>
              <InputEmail
                label={'Адрес электронной почты (используется для авторизации)'}
                autoComplete='username'
                value={{email}}
                required
                {...{onUpdateObject, errors}}
              />
            </div>
            <div>
              <InputPassword
                label={'Пароль'}
                autoComplete='password'
                value={{password}}
                required
                {...{onUpdateObject, errors}}
              />
            </div>
            <div>
              <InputPassword
                label={'Повтор пароля'}
                autoComplete='password'
                value={{password_confirmation}}
                required
                {...{onUpdateObject, errors}}
              />
            </div>
            <button disabled={is_register_progress}>Зарегистрироваться</button>
            {is_register_progress && <div>Запрос регистрации</div>}
          </form>
        </Container>
      </div>
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {
      state: {
        password, email, name, password_confirmation
      }
    } = this
    this.props.register({password, email, name, password_confirmation})
        .catch(
          (error) => {
            const {
              response: {
                data: {
                  errors
                } = {}
              } = {}
            } = error

            this.setState(
              (state) => {
                return {
                  ...state,
                  errors
                }
              }
            )

          })
  }

  onUpdateObject = (new_data) => {
    this.setState(
      (state) => {
        return {
          ...state,
          ...new_data
        }
      }
    )
  }
}
