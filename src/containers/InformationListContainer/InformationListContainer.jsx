import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import InformationList from 'components/InformationList'

export default class InformationListContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <InformationList />
      </PageWrapper>
    )
  }
}
