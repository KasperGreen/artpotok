import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import BuyTicket from 'components/BuyTicket'

export default class BuyTicketContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <BuyTicket />
      </PageWrapper>
    )
  }
}
