import React, { Component } from 'react'
import './LogoutAfterMessage.css'
import Container from 'components/Container'

export default class LogoutAfterMessage extends Component {
  render () {
    return (
      <div className='LogoutAfterMessage'>
        <Container>
          <h1>Заходи ещё!</h1>
        </Container>
      </div>
    )
  }
}
