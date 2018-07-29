import React from 'react'
import './NewInformationForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_INFORMATION_URL, INFORMATION_URL } from 'constants/URL'
import _ from 'lodash'
import informationsContextConnection from 'context/Informations/informationsContextConnection'
import Button from 'components/Button'
import NavButtons from 'templates/NavButtons'
import PageCreated from 'components/PageCreated'
import CreatePageExtend from 'extends/CreatePageExtend'
import FormWaitMessage from 'components/FormWaitMessage'

@informationsContextConnection('context')
export default class NewInformationForm extends CreatePageExtend {
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
        title,
      },
      props: {
        context: {
          add_information_progress,
          add_form_errors
        }
      },
      onSubmit,
      resetForm
    } = this

    if (created) return (
      <PageCreated>
        <div className='NewInformationForm-created'>
          <div className='NewInformationForm-title'>
            Раздел <strong>{title}</strong> создан.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={[INFORMATION_URL, name].join('/')}>
                    Перейти к информационному разделу
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={INFORMATION_URL}>
                    Вернуться в раздел информации
                  </Link>
                </Button>
              </li>
              <li>
                <Button onClick={resetForm}>
                  <Link to={ADD_INFORMATION_URL}>
                    Создать другой раздел
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

    return (
      <div className='NewInformationForm'>
        <Container>
          <h2 className='NewInformationForm-title'>
            Новый информационный раздел
          </h2>
          <Form {...{
            onSubmit,
            progress: add_information_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название раздела'}
              placeholder={'Новый раздел'}
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
              label={'Текст раздела'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            {add_information_progress && <FormWaitMessage />}
            <div className='NewInformationForm-buttons'>
              <Button disabled={add_information_progress}>
                Сохранить
              </Button>
            </div>
          </Form>
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
