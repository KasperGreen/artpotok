import React, { Component } from 'react'
import './Register.css'
import Container from 'components/Container'
import userContextConnection from 'context/User/userContextConnection'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import PropTypes from 'prop-types'

@userContextConnection
export default class Register extends Component {
  state = {
    errors: {}
  }

  render () {
    const {
      props: {
        is_register_progress
      },
      state: {
        errors
      },
      onSubmit
    } = this

    return (
      <div className='Register'>
        <Container>
          <Form {...{onSubmit, errors}} autoComplete="off">
            <h1>Регистрация</h1>
            <div>
              <FormInput
                name={'name'}
                label={'Отображаемое имя'}
                autoComplete='usertitle'
                placeholder={'Иван Иванов'}
                required
              />
            </div>
            <div>
              <FormInput
                email
                name={'email'}
                label={'Адрес электронной почты (используется для авторизации)'}
                autoComplete='username'
                required
              />
            </div>
            <div>
              <FormInput
                password
                name={'password'}
                label={'Пароль'}
                autoComplete='password'
                required
              />
            </div>
            <div>
              <FormInput
                password
                name={'password_confirmation'}
                label={'Повтор пароля'}
                autoComplete='password'
                required
              />
            </div>
            <button disabled={is_register_progress}>Зарегистрироваться</button>
            {is_register_progress && <div>Запрос регистрации</div>}
          </Form>
        </Container>
      </div>
    )
  }

  onSubmit = (registration_data) => {
    const {
      props: {
        register
      }
    } = this
    register(registration_data)
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
  static propTypes = {
    register: PropTypes.func,
  }

}
