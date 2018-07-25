import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramTechnoAshramList from 'components/ProgramTechnoAshram/ProgramTechnoAshramList'

export default class ProgramTechnoAshramContainer extends Component {
  render () {

    return (
      <PageWrapper>
        <ProgramTechnoAshramList />
      </PageWrapper>
    )
  }
}
