import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditPracticeForm from 'components/EditPracticeForm'
import practicesContextConnection from 'context/Practices/practicesContextConnection'

@practicesContextConnection
export default class EditPracticeContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditPracticeForm {...this.props} />
      </PageWrapper>
    )
  }
}
