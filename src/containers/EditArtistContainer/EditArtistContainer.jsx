import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import artistsContextConnection from 'context/Artists/artistsContextConnection'
import EditArtistForm from 'components/EditArtistForm'

@artistsContextConnection
export default class EditArtistContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <EditArtistForm {...this.props} />
      </PageWrapper>
    )
  }
}
