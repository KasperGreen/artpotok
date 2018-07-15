import React, { Component } from 'react'
import './NewStageForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Redirect } from 'react-router-dom'
import { MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import stagesContextConnection from 'context/Stages/stagesContextConnection'

@stagesContextConnection('context')
export default class NewStageForm extends Component {
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
          add_stage_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    if (created) return (
      <div>
        Сцена <strong>{name}</strong> создана
        <Redirect to={[MUSIC_URL, name].join('/')} />
      </div>)

    return (
      <div className='NewStageForm'>
        <Container>
          <Form {...{onSubmit, progress: add_stage_progress, errors: add_form_errors}}>
            <FormInput
              name={'name'}
              required
              //pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
            />
            <FormInput
              required
              name={'title'}
              label={'Название сцены'}
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
            <button disabled={add_stage_progress}>Создать</button>
          </Form>
          {add_stage_progress && <h1>Данные отправляются</h1>}
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
