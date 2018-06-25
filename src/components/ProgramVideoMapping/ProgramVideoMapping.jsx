import React, { Component } from 'react'
import './ProgramVideoMapping.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'

export default class ProgramVideoMapping extends Component {
  render () {
    return (
      <div className='ProgramVideoMapping'>
        <Container>
          <PageTitle>
            Видеомэпинг
          </PageTitle>
        </Container>
      </div>
    )
  }
}
