import React, { Component } from 'react'
import './EditPartnerForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import Container from 'components/Container'
import _ from 'lodash'
import { PARTNER_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import PageCreated from 'components/PageCreated'
import NavButtons from 'templates/NavButtons'
import Button from 'components/Button'
import FormWaitMessage from 'components/FormWaitMessage'

export default class EditPartnerForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_partner_form_errors,
        update_partner_progress,
        match: {
          params: {
            id
          }
        },
        partners_list: {
          [id]: {
            title, url
          } = {},
          [id]: partner_data
        }
      },
      state: {
        updated
      }
    } = this

    if (updated) return (
      <PageCreated>
        <div>
          <div className='EditPartnerForm-title'>
            Партнёр <strong>{title}</strong> обновлен.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={PARTNER_URL}>
                    Перейти к списку всех партнёров
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

    return (
      <div className='EditPartnerForm'>
        <Container>
          {partner_data &&
          <Form {...{onSubmit}}
                progress={update_partner_progress}
                default_form_data={{title, url}}
                errors={update_partner_form_errors}
          >
            <FormInput
              required
              label={'Название'}
              name='title'
            />
            <FormInput
              url
              required
              label={'Ссылка на сайт'}
              name='url'
            />
            <FormInput
              file
              label={'Изображение'}
              name='image'
            />
            {update_partner_progress && <FormWaitMessage />}
            <div className='EditPartnerForm-buttons'>
              <Button disabled={update_partner_progress}>Сохранить</Button>
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
        updatePartner,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updatePartner(id, data).then((response) => {
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
