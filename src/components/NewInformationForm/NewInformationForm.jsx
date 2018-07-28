import React, { Component } from 'react'
import './NewInformationForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_INFORMATION_URL, MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import informationsContextConnection from 'context/Informations/informationsContextConnection'
import Button from 'components/Button'
import Text from 'templates/Text'
import NavButtons from 'templates/NavButtons'

@informationsContextConnection('context')
export default class NewInformationForm extends Component {
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
          add_information_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div className='NewInformationForm-created'>
        <Text>
          <div>
            Сцена <strong>{name}</strong> создана.
          </div>
          <NavButtons>
            <ul>
              <li><Button><Link to={[MUSIC_URL, name].join('/')}>Перейти к сцене</Link></Button></li>
              <li><Button><Link to={MUSIC_URL}>Вернуться ко списку всех сцен</Link></Button></li>
              <li><Button><Link to={ADD_INFORMATION_URL}>Создать другую сцену</Link></Button></li>
            </ul>
          </NavButtons>
        </Text>

      </div>)

    return (
      <div className='NewInformationForm'>
        <Container>
          <h2 className='NewInformationForm-title'>
            Новая сцена
          </h2>
          <Form {...{
            onSubmit,
            progress: add_information_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название сцены'}
              placeholder={'Новая сцена'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-information'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание сцены'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewInformationForm-buttons'>
              <Button disabled={add_information_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_information_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addInformation(data).then((response) => {

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
