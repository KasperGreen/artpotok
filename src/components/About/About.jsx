import React, { Component } from 'react'
import './About.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <Container>
          <PageTitle>
            О фестивале
          </PageTitle>
          <div className='About-test'>
            Тестовый текст о фестивале
          </div>
        </Container>
      </div>
    )
  }
}
