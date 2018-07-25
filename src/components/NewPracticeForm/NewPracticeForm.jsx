import React, { Component } from 'react'
import './NewPracticeForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_PRACTICE_URL, PRACTICE_URL } from 'constants/URL'
import _ from 'lodash'
import practicesContextConnection from 'context/Practices/practicesContextConnection'
import Button from 'components/Button'

@practicesContextConnection('context')
export default class NewPracticeForm extends Component {
  state = {
    form: {},
    created: false,
    id: false,
    description: false,
    name: false,
    upload_progress: false,
    title: false,
    image: false,
  }

  render () {
    const {
      state: {
        created,
        name,
      },
      props: {
        context: {
          add_practice_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div className='NewPracticeForm-created'>
        <div>
          Практика <strong>{name}</strong> создана. <Link to={[PRACTICE_URL, name].join('/')}>Перейти к практике</Link>
        </div>
        <div>
          <Link to={PRACTICE_URL}>Вернуться ко списку всех практик</Link>
        </div>
        <div>
          <Link to={ADD_PRACTICE_URL}>Создать другую практику</Link>
        </div>

      </div>)

    return (
      <div className='NewPracticeForm'>
        <Container>
          <h2 className='NewPracticeForm-title'>
            Новая сцена
          </h2>
          <Form {...{
            onSubmit,
            progress: add_practice_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название практики'}
              placeholder={'Новая практика'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-practice'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание практики'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewPracticeForm-buttons'>
              <Button disabled={add_practice_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_practice_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addPractice(data).then((response) => {

      this.setState(
        (state) => {
          return {
            ...state,
            ..._.head(_.toArray(response.data))
          }
        }
      )

    })
  }

  componentDidMount () {
  }
}
