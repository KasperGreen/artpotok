import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramTechnoAshramEvent from 'components/ProgramTechnoAshramEvent'

export default class ProgramTechnoAshramEventContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            event_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramTechnoAshramEvent {...{event_name}} />
      </PageWrapper>
    )
  }
}
