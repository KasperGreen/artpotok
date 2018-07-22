import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditMasterForm from 'components/EditMasterForm'
import stagesContextConnection from 'context/Masters/mastersContextConnection'

@stagesContextConnection
export default class EditMasterContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditMasterForm {...this.props} />
      </PageWrapper>
    )
  }
}
