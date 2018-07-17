import React, { Component } from 'react'
import './ProgramMusicArtist.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import artistsContextConnection from 'context/Artists/artistsContextConnection'
import { IMAGES_URL } from 'constants/API'

@artistsContextConnection
export default class ProgramMusicArtist extends Component {
  render () {
    const {
        props: {
          artist_name, getArtistByName
        }
      } = this,

      {title, description, sound_cloud_url, image} = getArtistByName(artist_name) || {}


    return (
      <div className='ProgramMusicArtist'>
        <Container>
          <PageTitle>{title}</PageTitle>
          <img src={IMAGES_URL + '/size400/' + image} alt={title} />
          {description}
          {sound_cloud_url}
        </Container>
      </div>
    )
  }
}
