import React, { Component } from 'react'
import './ProgramMusicArtist.css'
import PageWrapper from 'components/PageWrapper'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'

export default class ProgramMusicArtist extends Component {
  render () {
    const {
      props: {
        stage, artist
      }
    } = this
    return (
      <div className='ProgramMusicArtist'>
        <Container>
          <PageTitle>Артист {stage} {artist}</PageTitle>
        </Container>
      </div>
    )
  }
}
