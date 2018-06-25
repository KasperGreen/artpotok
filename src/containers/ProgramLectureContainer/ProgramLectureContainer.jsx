import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramLecture from 'components/ProgramLecture'

export default class ProgramLectureContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            lecture_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramLecture {...{lecture_name}} />
      </PageWrapper>
    )
  }
}
