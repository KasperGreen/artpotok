import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import PartnersList from 'components/PartnersList'

export default class PartnersListContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <PartnersList />
      </PageWrapper>
    )
  }
}
