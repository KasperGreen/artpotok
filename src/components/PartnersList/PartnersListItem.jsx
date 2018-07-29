import React, { Component } from 'react'
import './PartnersListItem.css'
import PropTypes from 'prop-types'
import { EDIT_PARTNER_URL, PARTNER_URL } from 'constants/URL'
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
      deletePartner,
      restorePartner,
      editPartner
    } = this

    return (
      <section className='PartnersListItem'>
        <Link className='PartnersListItem-link' to={[PARTNER_URL, name].join('/')}>
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
            onClick={deletePartner}
          >Удалить
          </Button>
          <Button
            onClick={editPartner}
          >Редактировать
          </Button>
        </div>
        {deleted &&
        <div className='PartnersListItem-deleted'>
          <div className='PartnersListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div>
              <Button onClick={restorePartner}>
                Восстановить
              </Button>
            </div>
          </div>
        </div>
        }
      </section>
    )
  }

  deletePartner = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deletePartner
        }
      }
    } = this
    deletePartner(id)
  }
  editPartner = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_PARTNER_URL, id].join('/'))
  }
  restorePartner = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restorePartner
        }
      }
    } = this
    restorePartner(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
