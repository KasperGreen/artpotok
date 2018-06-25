import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramMasterClassList from 'components/ProgramMasterClassList'

export default class ProgramMasterClassListContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <ProgramMasterClassList />
      </PageWrapper>
    )
  }
}
