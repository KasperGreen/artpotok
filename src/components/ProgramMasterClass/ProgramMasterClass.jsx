import React, { Component } from 'react'
import './ProgramMasterClass.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import mastersContextConnection from 'context/Masters/mastersContextConnection'
import { IMAGES_URL } from 'constants/API'

@mastersContextConnection
export default class ProgramMasterClass extends Component {
  render () {
    const {
        props: {
          master_class_name, getMasterByName
        }
      } = this,
      {title, description, image} = getMasterByName(master_class_name) || {}

    return (
      <div className='ProgramMasterClass'>
        <Container>
          <PageTitle>{title}</PageTitle>
          <img className='ProgramMasterClass-image' src={IMAGES_URL + '/size400/' + image} alt={title} />
          <div className='ProgramMasterClass-description'>
            {description}
          </div>
        </Container>
      </div>
    )
  }
}
