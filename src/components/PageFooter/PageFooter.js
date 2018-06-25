import React, { Component } from 'react'
import './PageFooter.css'
import Container from 'components/Container'

export default class PageFooter extends Component {
  render () {

    return (
      <footer className='PageFooter'>
        <Container>
          <div>Это подвал</div>
        </Container>
      </footer>
    )
  }

}
