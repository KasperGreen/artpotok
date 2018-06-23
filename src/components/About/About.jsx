import React, { Component } from 'react'
import './About.css'
import PageTitle from 'components/PageTitle/PageTitle'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <PageTitle>
          !О фестивале!
        </PageTitle>
      </div>
    )
  }
}
