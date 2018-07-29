import React, { Component } from 'react'
import './InformationListItem.css'
import PropTypes from 'prop-types'
import { EDIT_INFORMATION_URL, INFORMATION_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import informationsContextConnection from 'context/Informations/informationsContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'

@withRouter
@informationsContextConnection('context')
export default class InformationListItem extends Component {
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
      deleteInformation,
      restoreInformation,
      editInformation
    } = this

    return (
      <section className='InformationListItem'>
        <Link className='InformationListItem-link' to={[INFORMATION_URL, name].join('/')}>
          <h3 className='InformationListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='InformationListItem-image'
            alt={title}
          />
        </Link>
        <div className='InformationListItem-buttons'>
          <Button
            onClick={deleteInformation}
          >Удалить
          </Button>
          <Button
            onClick={editInformation}
          >Редактировать
          </Button>
        </div>
        {deleted &&
        <div className='InformationListItem-deleted'>
          <div className='InformationListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restoreInformation}>Восстановить</Button></div>
          </div>
        </div>
        }
      </section>
    )
  }

  deleteInformation = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteInformation
        }
      }
    } = this
    deleteInformation(id)
  }
  editInformation = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_INFORMATION_URL, id].join('/'))
  }
  restoreInformation = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreInformation
        }
      }
    } = this
    restoreInformation(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
