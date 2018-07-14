import React, { Component } from 'react'
import './ProgramMusicStagesStage.css'
import PropTypes from 'prop-types'
import { MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import stagesContextConnection from 'context/Stages/stagesContextConnection'


@stagesContextConnection('context')
export default class ProgramMusicStagesStage extends Component {
  state = {
    deleted: false
  }

  render () {
    const {
      props: {
        title,
        name,
        description,
        image,
        deleted
      },
      deleteStage,
      restoreStage
    } = this

    if (deleted) return (
      <div>
        Удалено. <button onClick={restoreStage}>Restore</button>
      </div>
    )

    return (
      <section className='ProgramMusicStagesStage'>
        <Link className='ProgramMusicStagesStage-link' to={[MUSIC_URL, name].join('/')}>
          <h3 className='ProgramMusicStagesStage-title'>
            {title}
          </h3>
          <img src={IMAGES_URL + '/size100/' + image} alt={title} />
          <div>
            {description}
          </div>
          <button onClick={deleteStage}>Delete</button>
        </Link>
      </section>
    )
  }

  deleteStage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteStage
        }
      }
    } = this
    deleteStage(id)
  }

  restoreStage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreStage
        }
      }
    } = this
    restoreStage(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
