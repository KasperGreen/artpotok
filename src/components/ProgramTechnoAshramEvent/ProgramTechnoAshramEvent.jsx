import React, { Component } from 'react'
import './ProgramTechnoAshramEvent.css'
import PageTitle from 'components/PageTitle'
import PropTypes from 'prop-types'

export default class ProgramTechnoAshramEvent extends Component {
  render () {
    const {
      props: {
        event_name
      }
    } = this
    return (
      <div className='ProgramTechnoAshramEvent'>
        <PageTitle>
          Страничка практики {event_name} Техно-Ашрама
        </PageTitle>
      </div>
    )
  }

  static propTypes = {
    event_name: PropTypes.string,
  }

}
