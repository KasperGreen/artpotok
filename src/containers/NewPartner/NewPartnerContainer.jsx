import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewPartnerForm from 'components/NewPartnerForm'

export default class NewPartnerContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewPartnerForm />
      </PageWrapper>
    )
  }
}
