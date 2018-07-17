import React, { Component } from 'react'
import './NewArtistForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_MUSIC_ARTIST_URL, MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import artistsContextConnection from 'context/Artists/artistsContextConnection'
import stagesContextConnection from 'context/Stages/stagesContextConnection'

@artistsContextConnection('context')
@stagesContextConnection('stage')
export default class NewArtistForm extends Component {
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
          stage_id,
          stage: {
            getStageById
          },
          context: {
            add_artist_progress,
            add_form_errors
          }
        },
        onSubmit
      } = this,
      stage = getStageById(stage_id)

    if (created) return (
      <div>
        <div>
          Артист <strong>{name}</strong> создан. <Link to={[MUSIC_URL, stage.name, name].join('/')}>Перейти к
          артисту</Link>
        </div>
        <div>
          <Link to={MUSIC_URL + '/' + stage.name}>Вернуться к списку артистов</Link>
        </div>
        <div>
          <Link to={ADD_MUSIC_ARTIST_URL + '/' + stage_id}>Добавить другого артиста</Link>
        </div>

      </div>)

    return (
      <div className='NewArtistForm'>
        <Container>
          <Form {...{
            onSubmit,
            progress: add_artist_progress,
            errors: add_form_errors,
            default_form_data: {stage_id}
          }}>
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
            />
            <FormInput
              required
              name={'title'}
              label={'Название артиста'}
            />
            <FormInput
              name={'sound_cloud_url'}
              label={'Ссылка на SoundCloud'}
              placeholder={'https://soundcloud.com/username'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Описание артиста'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <button disabled={add_artist_progress}>Создать</button>
          </Form>
          {add_artist_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addArtist(data).then((response) => {

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
