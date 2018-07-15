import React, { Component } from 'react'
import './ProgramMusicStagesStage.css'
import PropTypes from 'prop-types'
import { EDIT_MUSIC_STAGE_URL, MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import stagesContextConnection from 'context/Stages/stagesContextConnection'
import { withRouter } from 'react-router'

@withRouter
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
      restoreStage,
      editStage
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
          <button
            onClick={editStage}
          >Редактировать
          </button>
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
  editStage = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_MUSIC_STAGE_URL, id].join('/'))
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
