import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewPracticeForm from 'components/NewPracticeForm'

export default class NewPracticeContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewPracticeForm />
      </PageWrapper>
    )
  }
}
