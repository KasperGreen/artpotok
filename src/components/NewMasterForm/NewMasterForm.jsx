import React from 'react'
import './NewMasterForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { MASTER_CLASS_URL } from 'constants/URL'
import _ from 'lodash'
import mastersContextConnection from 'context/Masters/mastersContextConnection'
import Button from 'components/Button'
import PageCreated from 'components/PageCreated'
import NavButtons from 'templates/NavButtons'
import CreatePageExtend from 'extends/CreatePageExtend'

@mastersContextConnection('context')
export default class NewMasterForm extends CreatePageExtend {
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
          add_master_progress,
          add_form_errors
        }
      },
      onSubmit,
      resetForm
    } = this

    if (created) return (
      <PageCreated>
        <div className='NewMasterForm-created'>
          <div className='NewLectureForm-title'>
            Мастер-Класс <strong>{title}</strong> создан.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={[MASTER_CLASS_URL, name].join('/')}>Перейти к
                    мастер-классу</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={MASTER_CLASS_URL}>
                    Вернуться ко списку всех мастер-классов
                  </Link>
                </Button>
              </li>
              <li>
                <Button onClick={resetForm}>
                  Создать другой мастер-класс
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

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
