import React, { Component } from 'react'
import './NewMasterForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_MASTER_CLASS_URL, MASTER_CLASS_URL } from 'constants/URL'
import _ from 'lodash'
import mastersContextConnection from 'context/Masters/mastersContextConnection'
import Button from 'components/Button'

@mastersContextConnection('context')
export default class NewMasterForm extends Component {
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
          add_master_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div className='NewMasterForm-created'>
        <div>
          Мастер-Класс <strong>{name}</strong> создан. <Link to={[MASTER_CLASS_URL, name].join('/')}>Перейти к мастер-классу</Link>
        </div>
        <div>
          <Link to={MASTER_CLASS_URL}>Вернуться ко списку всех мастер-классов</Link>
        </div>
        <div>
          <Link to={ADD_MASTER_CLASS_URL}>Создать другой мастер-класс</Link>
        </div>

      </div>)

    return (
      <div className='NewMasterForm'>
        <Container>
          <h2 className='NewMasterForm-title'>
            Новый Мастер-Класс
          </h2>
          <Form {...{
            onSubmit,
            progress: add_master_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название мастер-класса'}
              placeholder={'Новый мастер-класс'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-master'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание мастер-класса'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewMasterForm-buttons'>
              <Button disabled={add_master_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_master_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addMaster(data).then((response) => {

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
