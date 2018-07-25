import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewAshramForm from 'components/NewAshramForm'

export default class NewAshramContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <NewAshramForm />
      </PageWrapper>
    )
  }
}
