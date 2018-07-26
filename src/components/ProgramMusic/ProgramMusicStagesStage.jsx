import React, { Component } from 'react'
import './ProgramMusicStagesStage.css'
import PropTypes from 'prop-types'
import { EDIT_MUSIC_STAGE_URL, MUSIC_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import stagesContextConnection from 'context/Stages/stagesContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button/Button'
import Interface from 'containers/Interface'

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
        image,
        deleted
      },
      deleteStage,
      restoreStage,
      editStage
    } = this

    return (
      <section className='ProgramMusicStagesStage'>
        <Link className='ProgramMusicStagesStage-link' to={[MUSIC_URL, name].join('/')}>
          <h3 className='ProgramMusicStagesStage-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='ProgramMusicStagesStage-image'
            alt={title}
          />
        </Link>
        <Interface need_admin>
          <div className='ProgramMusicStagesStage-buttons'>
            <Button
              onClick={deleteStage}
            >Удалить
            </Button>
            <Button
              onClick={editStage}
            >Редактировать
            </Button>
          </div>
        </Interface>
        {deleted &&
        <div className='ProgramMusicStagesStage-deleted'>
          <div className='ProgramMusicStagesStage-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restoreStage}>Восстановить</Button></div>
          </div>
        </div>
        }
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
