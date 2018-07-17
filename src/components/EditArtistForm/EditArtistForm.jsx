import React, { Component } from 'react'
import './EditArtistForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import { MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'

export default class EditArtistForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
      onSubmit,
      props: {
        update_artist_form_errors,
        update_artist_progress,
        match: {
          params: {
            id
          }
        },
        artists_list: {
          [id]: {
            title, description, name
          } = {},
          [id]: artist_data
        }
      },
      state: {
        updated
      }
    } = this

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
                default_form_data={{title, description, name}}
                errors={update_artist_form_errors}
          >
            <FormInput label={'Имя для URL (не менять без крайней необходимости)'} name='name' />
            <FormInput label={'Название'} name='title' />
            <FormTextArea label={'Описание'} name='description' />
            <FormInput label={'Изображение'} file name='image' />
            <button>Сохранить</button>
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
