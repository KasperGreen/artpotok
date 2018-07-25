import React, { Component } from 'react'
import './EditAshramForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { TECHNO_ASHRAM_URL } from 'constants/URL'
import { Link } from 'react-router-dom'

export default class EditAshramForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_ashram_form_errors,
        update_ashram_progress,
        match: {
          params: {
            id
          }
        },
        ashrams_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: ashram_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <div>
        <div>
          Ашрам <strong>{name}</strong> Обновлен. <Link to={[TECHNO_ASHRAM_URL, name].join('/')}>Перейти к Ашраму</Link>
        </div>
        <div>
          <Link to={TECHNO_ASHRAM_URL}>Вернуться ко списку всех Ашрамов</Link>
        </div>
      </div>)

    return (
      <div className='EditAshramForm'>
        <Container>
          {ashram_data &&
          <Form {...{onSubmit}}
                progress={update_ashram_progress}
                default_form_data={{title, description, name}}
                errors={update_ashram_form_errors}
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
        updateAshram,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updateAshram(id, data).then((response) => {
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
