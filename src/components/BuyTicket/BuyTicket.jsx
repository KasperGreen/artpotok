import React, { Component } from 'react'
import './BuyTicket.css'
import PageTitle from 'components/PageTitle/PageTitle'

export default class BuyTicket extends Component {
  render () {
    return (
      <div className='BuyTicket'>
        <PageTitle>
          Купить билет
        </PageTitle>
      </div>
    )
  }
}
