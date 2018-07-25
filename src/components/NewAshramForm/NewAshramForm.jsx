import React, { Component } from 'react'
import './NewAshramForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_ASHRAM_URL, TECHNO_ASHRAM_URL } from 'constants/URL'
import _ from 'lodash'
import ashramsContextConnection from 'context/Ashrams/ashramsContextConnection'
import Button from 'components/Button'

@ashramsContextConnection('context')
export default class NewAshramForm extends Component {
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
          add_ashram_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div className='NewAshramForm-created'>
        <div>
          Ашрам <strong>{name}</strong> создан. <Link to={[TECHNO_ASHRAM_URL, name].join('/')}>Перейти к Ашраму</Link>
        </div>
        <div>
          <Link to={TECHNO_ASHRAM_URL}>Вернуться ко списку всех Ашрамов</Link>
        </div>
        <div>
          <Link to={ADD_ASHRAM_URL}>Создать другой Ашрам</Link>
        </div>

      </div>)

    return (
      <div className='NewAshramForm'>
        <Container>
          <h2 className='NewAshramForm-title'>
            Новый Ашрам
          </h2>
          <Form {...{
            onSubmit,
            progress: add_ashram_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название Ашрама'}
              placeholder={'Новый Ашрам'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-ashram'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание ашрама'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewAshramForm-buttons'>
              <Button disabled={add_ashram_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_ashram_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addAshram(data).then((response) => {

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
