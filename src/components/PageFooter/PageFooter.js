import React, { Component } from 'react'
import './PageFooter.css'
import Container from 'components/Container'

export default class PageFooter extends Component {
  render () {

    return (
      <footer className='PageFooter'>
        <Container>
          <a href={'https:/Kasper.Green'} target='_blank'>Kasper.Green</a>
        </Container>
      </footer>
    )
  }

}
