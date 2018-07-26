import React, { Component } from 'react'
import './PartnersListItem.css'
import PropTypes from 'prop-types'
import { EDIT_PRACTICE_URL, PRACTICE_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import partnersContextConnection from 'context/Partners/partnersContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'

@withRouter
@partnersContextConnection('context')
export default class PartnersListItem extends Component {
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
      <section className='PartnersListItem'>
        <Link className='PartnersListItem-link' to={[PRACTICE_URL, name].join('/')}>
          <h3 className='PartnersListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='PartnersListItem-image'
            alt={title}
          />
        </Link>
        <div className='PartnersListItem-buttons'>
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
        <div className='PartnersListItem-deleted'>
          <div className='PartnersListItem-deleted-inner'>
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
