import React, { Component } from 'react'
import './ProgramMusic.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import ProgramMusicStages from 'components/ProgramMusic/ProgramMusicStages'
import { Link } from 'react-router-dom'
import { ADD_MUSIC_STAGE_URL } from 'constants/URL'
import ActionButton from 'components/ActionButton'

export default class ProgramMusic extends Component {
  render () {
    const {
      props: {
        stages_list
      }
    } = this
    return (
      <div className='ProgramMusic'>
        <Container>
          <PageTitle>
            Музыкальные сцены
          </PageTitle>
          <ProgramMusicStages {...{stages_list}} />
          <div>
            <ActionButton>
              <Link to={ADD_MUSIC_STAGE_URL} title={'Добавить новую сцену'}>+</Link>
            </ActionButton>
          </div>
        </Container>
      </div>
    )
  }
}
