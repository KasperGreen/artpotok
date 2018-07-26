import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewInformationForm from 'components/NewInformationForm'

export default class NewInformationContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewInformationForm />
      </PageWrapper>
    )
  }
}
