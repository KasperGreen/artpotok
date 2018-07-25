import React, { Component } from 'react'
import './ProgramPractice.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import practicesContextConnection from 'context/Practices/practicesContextConnection'
import { IMAGES_URL } from 'constants/API'

@practicesContextConnection
export default class ProgramPractice extends Component {
  render () {
    const {
        props: {
          practice_name, getPracticeByName
        }
      } = this,
      {title, description, image} = getPracticeByName(practice_name) || {}

    return (
      <div className='ProgramPractice'>
        <Container>
          <PageTitle>{title}</PageTitle>
          <img className='ProgramPractice-image' src={IMAGES_URL + '/size400/' + image} alt={title} />
          <div className='ProgramPractice-description'>
            {description}
          </div>
        </Container>
      </div>
    )
  }
}
