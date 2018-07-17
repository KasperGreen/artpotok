import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramMusicStage from 'components/ProgramMusicStage'
import stagesContextConnection from 'context/Stages/stagesContextConnection'

@stagesContextConnection
export default class ProgramMusicStageContainer extends Component {
  render () {
    const {
        props: {
          getStageByName,
          match: {
            params: {
              stage_name
            }
          }
        }
      } = this,
      stage_data = getStageByName(stage_name)
    return (
      <PageWrapper>
        {stage_data &&
        <ProgramMusicStage {...{...stage_data}} />
        }
      </PageWrapper>
    )
  }

}
