import React, { Component } from 'react'
import './Info.css'
import PageTitle from 'components/PageTitle/PageTitle'

export default class Info extends Component {
  render () {
    return (
      <section className='Info'>
        <PageTitle>
          Подробности
        </PageTitle>
      </section>
    )
  }
}
