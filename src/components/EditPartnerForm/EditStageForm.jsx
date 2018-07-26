import React, { Component } from 'react'
import './EditStageForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'

export default class EditStageForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_stage_form_errors,
        update_stage_progress,
        match: {
          params: {
            id
          }
        },
        stages_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: stage_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <div>
        <div>
          Сцена <strong>{name}</strong> Обновлена. <Link to={[MUSIC_URL, name].join('/')}>Перейти к сцене</Link>
        </div>
        <div>
          <Link to={MUSIC_URL}>Вернуться ко списку всех сцен</Link>
        </div>
      </div>)

    return (
      <div className='EditStageForm'>
        <Container>
          {stage_data &&
          <Form {...{onSubmit}}
                progress={update_stage_progress}
                default_form_data={{title, description, name}}
                errors={update_stage_form_errors}
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
        updateStage,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updateStage(id, data).then((response) => {
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
