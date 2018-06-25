import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramPracticeList from 'components/ProgramPracticeList'

export default class ProgramPracticeListContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <ProgramPracticeList />
      </PageWrapper>
    )
  }
}
