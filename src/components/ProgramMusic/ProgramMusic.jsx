import React, { Component } from 'react'
import './ProgramMusic.css'
import PageTitle from 'components/PageTitle/PageTitle'
import { Link } from 'react-router-dom'
import { MUSIC_URL } from 'constants/URL'
import Container from 'components/Container'

export default class ProgramMusic extends Component {
  render () {
    return (
      <div className='ProgramMusic'>
        <Container>
          <PageTitle>
            Музыкальная сцена
          </PageTitle>
          <nav>
            <ul>
              <li><Link to={MUSIC_URL + '/life'}>Живая сцена</Link></li>
              <li><Link to={MUSIC_URL + '/digital'}>Электронная сцена</Link></li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}
