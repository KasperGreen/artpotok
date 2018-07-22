import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewMasterForm from 'components/NewMasterForm'

export default class NewMasterContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewMasterForm />
      </PageWrapper>
    )
  }
}
