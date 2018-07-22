import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditPageForm from 'components/EditPageForm/EditPageForm'
import pagesContextConnection from 'context/Pages/pagesContextConnection'

@pagesContextConnection
export default class EditPageContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditPageForm {...this.props} />
      </PageWrapper>
    )
  }
}
