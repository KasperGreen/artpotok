import React, { Component } from 'react'
import './PageCreated.css'

export default class PageCreated extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='PageCreated'>
        {children}
      </div>
    )
  }
}
