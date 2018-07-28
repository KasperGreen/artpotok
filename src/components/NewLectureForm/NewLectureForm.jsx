import React, { Component } from 'react'
import './NewLectureForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_LECTURE_URL, MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import lecturesContextConnection from 'context/Lectures/lecturesContextConnection'
import Button from 'components/Button'
import Text from 'templates/Text'
import NavButtons from 'templates/NavButtons'

@lecturesContextConnection('context')
export default class NewLectureForm extends Component {
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
          add_lecture_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div className='NewLectureForm-created'>
        <Text>
          <div>
            Лекция <strong>{title}</strong> создана.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={[MUSIC_URL, name].join('/')}>
                    Перейти к лекции
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={MUSIC_URL}>
                    Вернуться ко списку всех лекций
                  </Link>
                </Button></li>
              <li>
                <Button>
                  <Link to={ADD_LECTURE_URL}>
                    Создать другую лекцию
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </Text>

      </div>)

    return (
      <div className='NewLectureForm'>
        <Container>
          <h2 className='NewLectureForm-title'>
            Новая лекция
          </h2>
          <Form {...{
            onSubmit,
            progress: add_lecture_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название леции'}
              placeholder={'Новая лекция'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
              placeholder={'new-lecture'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание лекции'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewLectureForm-buttons'>
              <Button disabled={!!add_lecture_progress}>
                Сохранить
              </Button>
            </div>
          </Form>
          {add_lecture_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addLecture(data).then((response) => {

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
