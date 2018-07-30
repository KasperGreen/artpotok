import React from 'react'
import './NewStageForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_MUSIC_STAGE_URL, MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import stagesContextConnection from 'context/Stages/stagesContextConnection'
import Button from 'components/Button'
import Text from 'templates/Text'
import NavButtons from 'templates/NavButtons'
import PageCreated from 'components/PageCreated'
import CreatePageExtend from 'extends/CreatePageExtend'
import FormWaitMessage from 'components/FormWaitMessage'

@stagesContextConnection('context')
export default class NewStageForm extends CreatePageExtend {
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
          add_stage_progress,
          add_form_errors
        }
      },
      onSubmit,
      resetForm
    } = this

    if (created) return (
      <PageCreated>
        <div className='NewStageForm-created'>
          <Text>
            <div className='NewLectureForm-title'>
              Сцена <strong>{title}</strong> создана.
            </div>
            <NavButtons>
              <ul>
                <li>
                  <Button>
                    <Link to={[MUSIC_URL, name].join('/')}>
                      Перейти к сцене
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link to={MUSIC_URL}>
                      Вернуться ко списку всех сцен
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={resetForm}>
                    <Link to={ADD_MUSIC_STAGE_URL}>
                      Создать другую сцену
                    </Link>
                  </Button>
                </li>
              </ul>
            </NavButtons>
          </Text>

        </div>
      </PageCreated>
    )

    return (
      <div className='NewStageForm'>
        <Container>
          <h2 className='NewStageForm-title'>
            Новая сцена
          </h2>
          <Form {...{
            onSubmit,
            progress: add_stage_progress,
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
              placeholder={'new-stage'}
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
            {add_stage_progress && <FormWaitMessage />}
            <div className='NewStageForm-buttons'>
              <Button disabled={add_stage_progress}>Сохранить</Button>
            </div>
          </Form>
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addStage(data).then((response) => {

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
