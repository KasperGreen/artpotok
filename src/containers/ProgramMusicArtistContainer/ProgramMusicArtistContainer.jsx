import React, { Component } from 'react'
import ProgramMusicArtist from 'components/ProgramMusicArtist'
import PageWrapper from 'components/PageWrapper'

export default class ProgramMusicArtistContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            stage_name,
            artist_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramMusicArtist {...{artist_name, stage_name}} />
      </PageWrapper>
    )
  }
}
