import React, { Component } from 'react'
import './ProgramPracticeListItem.css'
import PropTypes from 'prop-types'
import { EDIT_PRACTICE_URL, PRACTICE_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import practicesContextConnection from 'context/Practices/practicesContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'

@withRouter
@practicesContextConnection('context')
export default class ProgramPracticeListItem extends Component {
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
      deletePractice,
      restorePractice,
      editPractice
    } = this

    return (
      <section className='ProgramPracticeListItem'>
        <Link className='ProgramPracticeListItem-link' to={[PRACTICE_URL, name].join('/')}>
          <h3 className='ProgramPracticeListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='ProgramPracticeListItem-image'
            alt={title}
          />
        </Link>
        <div className='ProgramPracticeListItem-buttons'>
          <Button
            onClick={deletePractice}
          >Удалить
          </Button>
          <Button
            onClick={editPractice}
          >Редактировать
          </Button>
        </div>
        {deleted &&
        <div className='ProgramPracticeListItem-deleted'>
          <div className='ProgramPracticeListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restorePractice}>Восстановить</Button></div>
          </div>
        </div>
        }
      </section>
    )
  }

  deletePractice = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deletePractice
        }
      }
    } = this
    deletePractice(id)
  }
  editPractice = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_PRACTICE_URL, id].join('/'))
  }
  restorePractice = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restorePractice
        }
      }
    } = this
    restorePractice(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
