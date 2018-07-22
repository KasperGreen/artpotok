import React, { Component } from 'react'
import './Program.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import ProgramList from 'components/Program/ProgramList'

export default class Program extends Component {
  render () {
    return (
      <section className='Program'>
        <Container>
          <PageTitle>
            Программа
          </PageTitle>
        </Container>
        <Container>
          <nav>
            <ProgramList />
          </nav>
        </Container>
      </section>
    )
  }
}
