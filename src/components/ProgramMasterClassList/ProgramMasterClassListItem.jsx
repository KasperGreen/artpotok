import React, { Component } from 'react'
import './ProgramMasterClassListItem.css'
import PropTypes from 'prop-types'
import { EDIT_MASTER_CLASS_URL, MASTER_CLASS_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from 'constants/API'
import mastersContextConnection from 'context/Masters/mastersContextConnection'
import { withRouter } from 'react-router'
import Button from 'components/Button'

@withRouter
@mastersContextConnection('context')
export default class ProgramMasterClassListItem extends Component {
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
      deleteMaster,
      restoreMaster,
      editMaster
    } = this

    return (
      <section className='ProgramMasterClassListItem'>
        <Link className='ProgramMasterClassListItem-link' to={[MASTER_CLASS_URL, name].join('/')}>
          <h3 className='ProgramMasterClassListItem-title'>
            {title}
          </h3>
          <img
            src={IMAGES_URL + '/size400/' + image}
            className='ProgramMasterClassListItem-image'
            alt={title}
          />
        </Link>
        <div className='ProgramMasterClassListItem-buttons'>
          <Button
            onClick={deleteMaster}
          >Удалить
          </Button>
          <Button
            onClick={editMaster}
          >Редактировать
          </Button>
        </div>
        {deleted &&
        <div className='ProgramMasterClassListItem-deleted'>
          <div className='ProgramMasterClassListItem-deleted-inner'>
            <div className='mb-m'>Удалено.</div>
            <div><Button onClick={restoreMaster}>Восстановить</Button></div>
          </div>
        </div>
        }
      </section>
    )
  }

  deleteMaster = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          deleteMaster
        }
      }
    } = this
    deleteMaster(id)
  }
  editMaster = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      props: {
        id,
        history
      }
    } = this

    history.push([EDIT_MASTER_CLASS_URL, id].join('/'))
  }
  restoreMaster = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {
      props: {
        id,
        context: {
          restoreMaster
        }
      }
    } = this
    restoreMaster(id)
  }

  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }

}
