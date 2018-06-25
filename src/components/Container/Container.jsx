import React, { Component } from 'react'
import './Container.css'

export default class Container extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='Container'>
        {children}
      </div>
    )
  }
}
