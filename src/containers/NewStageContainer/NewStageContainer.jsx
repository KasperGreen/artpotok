import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewStageForm from 'components/NewStageForm'

export default class NewStageContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewStageForm />
      </PageWrapper>
    )
  }
}
