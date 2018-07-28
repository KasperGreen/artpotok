import React from 'react'
import './NewArtistForm.css'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import { Link } from 'react-router-dom'
import { ADD_MUSIC_ARTIST_URL, MUSIC_URL } from 'constants/URL'
import _ from 'lodash'
import artistsContextConnection from 'context/Artists/artistsContextConnection'
import NavButtons from 'templates/NavButtons'
import Button from 'components/Button'
import PageCreated from 'components/PageCreated'
import stagesContextConnection from 'context/Stages/stagesContextConnection'
import CreatePageExtend from 'extends/CreatePageExtend'

@artistsContextConnection('artist')
@stagesContextConnection('stage')
export default class NewArtistForm extends CreatePageExtend {
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
          title,
          id
        },
        props: {
          stage_id,
          artist: {
            getArtistById
          },
          stage: {
            getStageById,
          },
          artist: {
            add_artist_progress,
            add_form_errors
          }
        },
        resetForm,
        onSubmit,
      } = this,
      artist = getArtistById(id),
      stage = getStageById(stage_id)

    if (created) return (
      <PageCreated>
        <div className='NewArtistForm-created'>
          <div className='NewArtistForm-title'>
            Артист <strong>{title}</strong> создан.
          </div>
          <NavButtons>
            <ul>
              <li>
                <Button>
                  <Link to={MUSIC_URL + '/' + stage.name + '/' + artist.name}>
                    Перейти к артисту
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to={MUSIC_URL + '/' + stage.name}>Вернуться к списку артистов</Link>
                </Button>
              </li>
              <li>
                <Button onClick={resetForm}>
                  <Link to={ADD_MUSIC_ARTIST_URL}>
                    Добавить другого артиста
                  </Link>
                </Button>
              </li>
            </ul>
          </NavButtons>
        </div>
      </PageCreated>)

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
              required
              name={'title'}
              seo_name_hack
              label={'Название артиста'}
            />
            <FormInput
              name={'name'}
              required
              pattern={'[A-Za-z-]+[A-Za-z-0-9]*'}
              label={'Имя латиницей для URL'}
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
            <div className='NewArtistForm-buttons'>
              <Button disabled={add_artist_progress}>
                Создать
              </Button>
            </div>
          </Form>
          {add_artist_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.artist.addArtist(data).then((response) => {

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
