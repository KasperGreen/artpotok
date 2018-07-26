import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditInformationForm from 'components/EditInformationForm'
import informationsContextConnection from 'context/Informations/informationsContextConnection'

@informationsContextConnection
export default class EditInformationContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditInformationForm {...this.props} />
      </PageWrapper>
    )
  }
}
