import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditStageForm from 'components/EditStageForm'
import stagesContextConnection from 'context/Stages/stagesContextConnection'

@stagesContextConnection
export default class EditStageContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditStageForm {...this.props} />
      </PageWrapper>
    )
  }
}
