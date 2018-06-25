import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import ProgramMasterClass from 'components/ProgramMasterClass'

export default class ProgramMasterClassContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            master_class_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <ProgramMasterClass {...{master_class_name}} />
      </PageWrapper>
    )
  }
}
