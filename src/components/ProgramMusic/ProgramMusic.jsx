import React, { Component } from 'react'
import './ProgramMusic.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import NewStageForm from 'components/NewStageForm'
import ProgramMusicStages from 'components/ProgramMusic/ProgramMusicStages'

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
          <NewStageForm />
        </Container>
      </div>
    )
  }
}
