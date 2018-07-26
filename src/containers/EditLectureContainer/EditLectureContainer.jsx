import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import EditLectureForm from 'components/EditLectureForm'
import lecturesContextConnection from 'context/Lectures/lecturesContextConnection'

@lecturesContextConnection
export default class EditLectureContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditLectureForm {...this.props} />
      </PageWrapper>
    )
  }
}
