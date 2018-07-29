import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import Information from 'components/Information'

export default class InformationContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            information_name
          }
        }
      }
    } = this

    return (
      <PageWrapper>
        <Information {...{information_name}} />
      </PageWrapper>
    )
  }
}
