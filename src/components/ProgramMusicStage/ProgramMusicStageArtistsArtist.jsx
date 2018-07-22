import React, { Component } from 'react'
import { EDIT_MUSIC_ARTIST_URL, MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import './ProgramMusicStageArtistsArtist.css'
import PropTypes from 'prop-types'
import { IMAGES_URL } from 'constants/API'
import { withRouter } from 'react-router'
import artistsContextConnection from 'context/Artists/artistsContextConnection'

@withRouter
@artistsContextConnection('context')
export default class ProgramMusicStageArtistsArtist extends Component {
  render () {
    const {
      props: {
        stage_name,
        image,
        description,
        sound_cloud_url,
        name,
        title,
        deleted
      },
      editArtist,
      deleteArtist,
      restoreArtist
    } = this

    if (deleted) return (
      <div>
        Удалено. <button onClick={restoreArtist}>Restore</button>
      </div>
    )

    return (
      <section className='ProgramMusicArtistsArtist'>
        <Link className='ProgramMusicArtistsArtist-link' to={[MUSIC_URL, stage_name, name].join('/')}>
          <h3 className='ProgramMusicArtistsArtist-title'>
            {title}
          </h3>
          <img className='ProgramMusicArtistsArtist-image' src={IMAGES_URL + '/size400/' + image} alt={title} />
          <div>
            {description}
          </div>
          <div>
            {sound_cloud_url}
          </div>
          <button onClick={deleteArtist}>
            Delete
          </button>
          <button onClick={editArtist}>
            Редактировать
          </button>
        </Link>
      </section>
    )
  }

  deleteArtist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteArtist
        }
      }
    } = this
    deleteArtist(id)
  }
  editArtist = (e) => {
    e.preventDefault()
    e.stopPropagation()

    console.log(' → ', e, ' ← e | ')

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_MUSIC_ARTIST_URL, id].join('/'))
  }
  restoreArtist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreArtist
        }
      }
    } = this
    restoreArtist(id)
  }
  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    sound_cloud_url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
