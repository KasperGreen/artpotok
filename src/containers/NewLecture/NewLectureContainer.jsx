import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewLectureForm from 'components/NewLectureForm'

export default class NewLectureContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewLectureForm />
      </PageWrapper>
    )
  }
}
