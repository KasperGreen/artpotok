import React, { Component } from 'react'
import './ProgramLectureListItem.css'
import PropTypes from 'prop-types'
import { EDIT_LECTURE_URL, LECTURE_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import lecturesContextConnection from 'context/Lectures/lecturesContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'
import Interface from 'containers/Interface'

@withRouter
@lecturesContextConnection('context')
export default class ProgramLectureListItem extends Component {
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
      deleteLecture,
      restoreLecture,
      editLecture
    } = this

    return (
      <section className='ProgramLectureListItem'>
        <Link className='ProgramLectureListItem-link' to={[LECTURE_URL, name].join('/')}>
          <h3 className='ProgramLectureListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='ProgramLectureListItem-image'
            alt={title}
          />
        </Link>
        <Interface need_admin>
          <div className='ProgramLectureListItem-buttons'>
            <Button
              onClick={deleteLecture}
            >Удалить
            </Button>
            <Button
              onClick={editLecture}
            >Редактировать
            </Button>
          </div>
        </Interface>
        {deleted &&
        <div className='ProgramLectureListItem-deleted'>
          <div className='ProgramLectureListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restoreLecture}>Восстановить</Button></div>
          </div>
        </div>
        }
      </section>
    )
  }

  deleteLecture = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteLecture
        }
      }
    } = this
    deleteLecture(id)
  }
  editLecture = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_LECTURE_URL, id].join('/'))
  }
  restoreLecture = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreLecture
        }
      }
    } = this
    restoreLecture(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
