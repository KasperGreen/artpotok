import React, { Component } from 'react'
import './Information.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import informationsContextConnection from 'context/Informations/informationsContextConnection'
import { IMAGES_URL } from 'constants/API'

@informationsContextConnection
export default class Information extends Component {
  render () {
    const {
        props: {
          information_name, getInformationByName
        }
      } = this,
      {title, description, image} = getInformationByName(information_name) || {}

    return (
      <div className='Information'>
        <Container>
          <PageTitle>{title}</PageTitle>
          <img className='Information-image' src={IMAGES_URL + '/size400/' + image} alt={title} />
          <div className='Information-description'>
            {description}
          </div>
        </Container>
      </div>
    )
  }
}
