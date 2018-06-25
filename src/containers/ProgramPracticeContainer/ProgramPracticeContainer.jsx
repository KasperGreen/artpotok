import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramPractice from 'components/ProgramPractice'

export default class ProgramPracticeContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            practice_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramPractice {...{practice_name}} />
      </PageWrapper>
    )
  }
}
