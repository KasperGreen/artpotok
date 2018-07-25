import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditAshramForm from 'components/EditAshramForm'
import ashramsContextConnection from 'context/Ashrams/ashramsContextConnection'

@ashramsContextConnection
export default class EditAshramContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditAshramForm {...this.props} />
      </PageWrapper>
    )
  }
}
