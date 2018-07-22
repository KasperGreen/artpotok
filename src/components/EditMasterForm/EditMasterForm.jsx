import React, { Component } from 'react'
import './EditMasterForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { MASTER_CLASS_URL, MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import Button from 'components/Button'

export default class EditMasterForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_master_form_errors,
        update_master_progress,
        match: {
          params: {
            id
          }
        },
        masters_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: master_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <div>
        <div>
          <div>Мастер-класс <strong>{name}</strong></div>
          <div>Обновлен. <Button>
            <Link to={[MASTER_CLASS_URL, name].join('/')}>Перейти к
              мастер-классу</Link>
          </Button>
          </div>
        </div>
        <div>
          <Button>
            <Link to={MUSIC_URL}>Вернуться ко списку всех мастерклассов</Link>
          </Button>
        </div>
      </div>)

    return (
      <div className='EditMasterForm'>
        <Container>
          {master_data &&
          <Form {...{onSubmit}}
                progress={update_master_progress}
                default_form_data={{title, description, name}}
                errors={update_master_form_errors}
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
            <Button>Сохранить</Button>
          </Form>
          }
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    const {
      props: {
        updateMaster,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updateMaster(id, data).then((response) => {
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
