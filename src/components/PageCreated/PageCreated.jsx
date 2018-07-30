import React, { Component } from 'react'
import './PageCreated.css'
import Container from 'components/Container'

export default class PageCreated extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <Container>
        <div className='PageCreated'>
          {children}
        </div>
      </Container>
    )
  }
}
