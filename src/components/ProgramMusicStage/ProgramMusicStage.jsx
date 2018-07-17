import React, { Component } from 'react'
import './ProgramMusicStage.css'
import PageTitle from 'components/PageTitle/PageTitle'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import ProgramMusicStageArtists from 'components/ProgramMusicStage/ProgramMusicStageArtists'

export default class ProgramMusicStage extends Component {
  render () {
    const {
      props: {
        name,
        id
      }
    } = this
    return (
      <div className='ProgramMusicStage'>
        <Container>
          <PageTitle>
            Сцена {name}
          </PageTitle>
          <ProgramMusicStageArtists {...{stage_id: id, stage_name: name}} />

        </Container>
      </div>
    )
  }

  static propTypes = {
    stage: PropTypes.string,
  }

}
