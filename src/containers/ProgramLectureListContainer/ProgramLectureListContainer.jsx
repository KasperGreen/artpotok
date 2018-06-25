import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramLectureList from 'components/ProgramLectureList'

export default class ProgramLectureListContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <ProgramLectureList />
      </PageWrapper>
    )
  }
}
