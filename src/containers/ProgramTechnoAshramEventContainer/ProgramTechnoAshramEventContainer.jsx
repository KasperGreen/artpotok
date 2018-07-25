import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramTechnoAshramEvent from 'components/ProgramTechnoAshramEvent'

export default class ProgramTechnoAshramEventContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            ashram_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramTechnoAshramEvent {...{ashram_name}} />
      </PageWrapper>
    )
  }
}
