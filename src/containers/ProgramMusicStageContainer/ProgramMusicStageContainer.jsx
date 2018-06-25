import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramMusicStage from 'components/ProgramMusicStage'

export default class ProgramMusicStageContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            stage
          }
        }
      }
    } = this
    return (
      <PageWrapper>
        <ProgramMusicStage {...{stage}} />
      </PageWrapper>
    )
  }
}
