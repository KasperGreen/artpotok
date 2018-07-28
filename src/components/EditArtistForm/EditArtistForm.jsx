import React, { Component } from 'react'
import './EditArtistForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import stagesContextConnection from 'context/Stages/stagesContextConnection'
import Button from 'components/Button'

@stagesContextConnection('stage')
export default class EditArtistForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        stage: {
          getStageById
        },
        update_artist_form_errors,
        update_artist_progress,
        match: {
          params: {
            id
          }
        },
        artists_list: {
          [id]: {
            title, description, name, sound_cloud_url, stage_id,
          } = {},
          [id]: artist_data
        }
      },
      state: {
        updated
      }
    } = this,
      stage = getStageById(stage_id)

    if (updated) return (
      <div>
        <div>
          Артист <strong>{name}</strong> Обновлён. <Link to={[MUSIC_URL, stage.name, name].join('/')}>Перейти к артисту.</Link>
        </div>
        <div>
          <Link to={[MUSIC_URL, stage.name].join('/')}>Вернуться ко списку всех артистов на сцене {stage.title}</Link>
        </div>
      </div>)


    if (updated) return (
      <div>
        <div>
          Сцена <strong>{name}</strong> Обновлена. <Link to={[MUSIC_URL, name].join('/')}>Перейти к сцене</Link>
        </div>
        <div>
          <Link to={MUSIC_URL}>Вернуться ко списку всех сцен</Link>
        </div>
      </div>)

    return (
      <div className='EditArtistForm'>
        <Container>
          {artist_data &&
          <Form {...{onSubmit}}
                progress={update_artist_progress}
                default_form_data={{title, description, name, sound_cloud_url}}
                errors={update_artist_form_errors}
          >
            <FormInput label={'Имя для URL (не менять без крайней необходимости)'} name='name' />
            <FormInput label={'Название'} name='title' />
            <FormInput label={'SoundCloud URL'} name='sound_cloud_url' />
            <FormTextArea label={'Описание'} name='description' />
            <FormInput label={'Изображение'} file name='image' />
            <Button>
              Сохранить
            </Button>
          </Form>
          }
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    const {
      props: {
        updateArtist,
        match: {
          params: {
            id
          }
        }
      }
    } = this

    updateArtist(id, data).then((response) => {
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

}
