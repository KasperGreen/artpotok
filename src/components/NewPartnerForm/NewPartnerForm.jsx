import React from 'react'
import './NewPartnerForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_PARTNER_URL, PARTNER_URL } from 'constants/URL'
import _ from 'lodash'
import partnersContextConnection from 'context/Partners/partnersContextConnection'
import Button from 'components/Button'
import NavButtons from 'templates/NavButtons'
import PageCreated from 'components/PageCreated'
import CreatePageExtend from 'extends/CreatePageExtend'

@partnersContextConnection('context')
export default class NewPartnerForm extends CreatePageExtend {
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
        title
      },
      props: {
        context: {
          add_partner_progress,
          add_form_errors
        }
      },
      resetForm,
      onSubmit
    } = this

    if (created) return (
      <PageCreated>
        <div className='NewPartnerForm-created'>
          <div className='NewPartnerForm-title'>
            Партнёр <strong>{title}</strong> добавлен.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link
                    to={PARTNER_URL}
                  >Вернуться ко списку всех партнёров
                  </Link>
                </Button>
              </li>
              <li>
                <Button onClick={resetForm}>
                  <Link to={ADD_PARTNER_URL}>
                    Добавить другого партнёра
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

    return (
      <div className='NewPartnerForm'>
        <Container>
          <h2 className='NewPartnerForm-title'>
            Новая сцена
          </h2>
          <Form {...{
            onSubmit,
            progress: add_partner_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название партнёра'}
              placeholder={'Новый партнёр'}
            />
            <FormInput
              url
              required
              name={'url'}
              label={'Ссылка на сайт'}
              placeholder={'https://example.com/'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewPartnerForm-buttons'>
              <Button disabled={add_partner_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_partner_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addPartner(data).then((response) => {

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
