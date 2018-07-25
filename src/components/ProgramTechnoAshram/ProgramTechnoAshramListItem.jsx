import React, { Component } from 'react'
import './ProgramTechnoAshramListItem.css'
import PropTypes from 'prop-types'
import { EDIT_ASHRAM_URL, TECHNO_ASHRAM_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import ashramsContextConnection from 'context/Ashrams/ashramsContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'

@withRouter
@ashramsContextConnection('context')
export default class ProgramTechnoAshramListItem extends Component {
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
      deleteAshram,
      restoreAshram,
      editAshram
    } = this

    return (
      <section className='ProgramTechnoAshramListItem'>
        <Link className='ProgramTechnoAshramListItem-link' to={[TECHNO_ASHRAM_URL, name].join('/')}>
          <h3 className='ProgramTechnoAshramListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='ProgramTechnoAshramListItem-image'
            alt={title}
          />
        </Link>
        <div className='ProgramTechnoAshramListItem-buttons'>
          <Button
            onClick={deleteAshram}
          >Удалить
          </Button>
          <Button
            onClick={editAshram}
          >Редактировать
          </Button>
        </div>
        {deleted &&
        <div className='ProgramTechnoAshramListItem-deleted'>
          <div className='ProgramTechnoAshramListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restoreAshram}>Восстановить</Button></div>
          </div>
        </div>
        }
      </section>
    )
  }

  deleteAshram = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteAshram
        }
      }
    } = this
    deleteAshram(id)
  }
  editAshram = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_ASHRAM_URL, id].join('/'))
  }
  restoreAshram = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreAshram
        }
      }
    } = this
    restoreAshram(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
