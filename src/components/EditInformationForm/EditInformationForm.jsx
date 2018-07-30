import React, { Component } from 'react'
import './EditInformationForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { INFORMATION_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import PageCreated from 'components/PageCreated'
import NavButtons from 'templates/NavButtons'
import Button from 'components/Button'
import FormWaitMessage from 'components/FormWaitMessage'

export default class EditInformationForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_information_form_errors,
        update_information_progress,
        match: {
          params: {
            id
          }
        },
        informations_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: information_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <PageCreated>
        <div>
          <div className='EditInformationForm-title'>
            Раздел <strong>{title}</strong> Обновлён.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={[INFORMATION_URL, name].join('/')}>Перейти к разделу</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={INFORMATION_URL}>
                    Вернуться к списку всех разделов
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

    return (
      <div className='EditInformationForm'>
        <Container>
          {information_data &&
          <Form {...{onSubmit}}
                progress={update_information_progress}
                default_form_data={{title, description, name}}
                errors={update_information_form_errors}
          >
            <FormInput
              required
              label={'Название раздела'}
              name='title'
            />
            <FormInput
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя для URL (не менять без крайней необходимости)'}
              name='name'
            />
            <FormTextArea
              required
              label={'Текст раздела'}
              name='description'
            />
            <FormInput
              file
              label={'Изображение'}
              name='image'
            />
            {update_information_progress && <FormWaitMessage />}
            <div className='EditInformationForm-buttons'>
              <Button
                disabled={update_information_progress}
              >
                Сохранить
              </Button>
            </div>
          </Form>
          }
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    const {
      props: {
        updateInformation,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updateInformation(id, data).then((response) => {
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
