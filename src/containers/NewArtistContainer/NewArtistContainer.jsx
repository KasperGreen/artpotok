import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import NewArtistForm from 'components/NewArtistForm'

export default class NewArtistContainer extends Component {
  render () {
    const {
      props: {
        match: {
          params: {
            stage_id
          }
        }
      }
    } = this
    return (
      <PageWrapper>
        <NewArtistForm {...{stage_id}} />
      </PageWrapper>
    )
  }
}
