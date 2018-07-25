import React, { Component } from 'react'
import './EditPracticeForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { PRACTICE_URL } from 'constants/URL'
import { Link } from 'react-router-dom'

export default class EditPracticeForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_practice_form_errors,
        update_practice_progress,
        match: {
          params: {
            id
          }
        },
        practices_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: practice_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <div>
        <div>
          Практика <strong>{name}</strong> Обновлена. <Link to={[PRACTICE_URL, name].join('/')}>Перейти к
          практике</Link>
        </div>
        <div>
          <Link to={PRACTICE_URL}>Вернуться ко списку всех практик</Link>
        </div>
      </div>)

    return (
      <div className='EditPracticeForm'>
        <Container>
          {practice_data &&
          <Form {...{onSubmit}}
                progress={update_practice_progress}
                default_form_data={{title, description, name}}
                errors={update_practice_form_errors}
          >
            <FormInput
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя для URL (не менять без крайней необходимости)'}
              name='name'
            />
            <FormInput
              required
              label={'Название'}
              name='title'
            />
            <FormTextArea
              required
              label={'Описание'}
              name='description'
            />
            <FormInput
              file
              label={'Изображение'}
              name='image'
            />
            <button>Сохранить</button>
          </Form>
          }
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    const {
      props: {
        updatePractice,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updatePractice(id, data).then((response) => {
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

}
