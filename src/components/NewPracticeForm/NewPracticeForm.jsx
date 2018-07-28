import React from 'react'
import './NewPracticeForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_PRACTICE_URL, PRACTICE_URL } from 'constants/URL'
import _ from 'lodash'
import practicesContextConnection from 'context/Practices/practicesContextConnection'
import Button from 'components/Button'
import PageCreated from 'components/PageCreated'
import NavButtons from 'templates/NavButtons'
import CreatePageExtend from 'extends/CreatePageExtend'

@practicesContextConnection('context')
export default class NewPracticeForm extends CreatePageExtend {
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
        title
      },
      props: {
        context: {
          add_practice_progress,
          add_form_errors
        }
      },
      resetForm,
      onSubmit
    } = this

    if (created) return (
      <PageCreated>
        <div className='NewPracticeForm-created'>
          <div className='NewPracticeForm-title'>
            Практика <strong>{title}</strong> создана.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={[PRACTICE_URL, name].join('/')}>
                    Перейти к практике
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={PRACTICE_URL}>
                    Вернуться ко списку всех практик
                  </Link>
                </Button>
              </li>
              <li>
                <Button onClick={resetForm}>
                  <Link to={ADD_PRACTICE_URL}>Создать другую практику</Link>
                </Button>
              </li>
            </ul>
          </NavButtons>

        </div>
      </PageCreated>
    )

    return (
      <div className='NewPracticeForm'>
        <Container>
          <h2 className='NewPracticeForm-title'>
            Новая сцена
          </h2>
          <Form {...{
            onSubmit,
            progress: add_practice_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название практики'}
              placeholder={'Новая практика'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-practice'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание практики'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewPracticeForm-buttons'>
              <Button disabled={add_practice_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_practice_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addPractice(data).then((response) => {

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
