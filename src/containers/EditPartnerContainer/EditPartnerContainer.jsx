import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditPartnerForm from 'components/EditPartnerForm'
import partnersContextConnection from 'context/Partners/partnersContextConnection'

@partnersContextConnection
export default class EditPartnerContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditPartnerForm {...this.props} />
      </PageWrapper>
    )
  }
}
