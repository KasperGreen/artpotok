import React, { Component } from 'react'
import './ProgramTechnoAshramEvent.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import ashramsContextConnection from 'context/Ashrams/ashramsContextConnection'
import { IMAGES_URL } from 'constants/API'

@ashramsContextConnection
export default class ProgramTechnoAshramEvent extends Component {
  render () {
    const {
        props: {
          ashram_name, getAshramByName
        }
      } = this,
      {title, description, image} = getAshramByName(ashram_name) || {}

    return (
      <div className='ProgramTechnoAshramEvent'>
        <Container>
          <PageTitle>{title}</PageTitle>
          <img className='ProgramTechnoAshramEvent' src={IMAGES_URL + '/size400/' + image} alt={title} />
          <div className='ProgramTechnoAshramEvent-description'>
            {description}
          </div>
        </Container>
      </div>
    )
  }
}
