import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramMusic from 'components/ProgramMusic'
import stagesContextConnection from 'context/Stages/stagesContextConnection'

@stagesContextConnection
export default class ProgramMusicContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <ProgramMusic {...this.props} />
      </PageWrapper>
    )
  }
}
