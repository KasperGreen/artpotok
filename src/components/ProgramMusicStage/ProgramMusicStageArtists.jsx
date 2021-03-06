import React, { Component } from 'react'
import artistsContextConnection from 'context/Artists/artistsContextConnection'
import { ADD_MUSIC_ARTIST_URL } from 'constants/URL'
import { Link } from 'react-router-dom'
import './ProgramMusicStageArtists.css'
import ProgramMusicStageArtistsArtist from 'components/ProgramMusicStage/ProgramMusicStageArtistsArtist'
import _ from 'lodash'
import ActionButton from 'components/ActionButton'

@artistsContextConnection
export default class ProgramMusicStageArtists extends Component {
  render () {
    const {
      props: {
        stage_name,
        stage_id,
        artists_list
      }
    } = this

    return (
      <div className='ProgramMusicStageArtists'>
        <nav>
          <ul className='ProgramMusicStageArtists-list'>
            {_.map(artists_list, (artist, key) => {
              return (
                <li key={key}>
                  <ProgramMusicStageArtistsArtist {...{...artist, stage_name}} />
                </li>
              )
            })}
          </ul>
        </nav>
        <ActionButton>
          <Link
            to={[ADD_MUSIC_ARTIST_URL, stage_id].join('/')}
            title={'Добавить нового артиста'}
          >+
          </Link>
        </ActionButton>
      </div>
    )
  }
}
