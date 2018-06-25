import React, { Component } from 'react'
import './ProgramVj.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'

export default class ProgramVj extends Component {
  render () {
    return (
      <div className='ProgramVj'>
        <Container>
          <PageTitle>
            Страница про виджейство
          </PageTitle>
        </Container>
      </div>
    )
  }
}
