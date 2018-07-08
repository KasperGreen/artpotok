import React, { Component } from 'react'
import userContextConnection from 'context/User/userContextConnection'

@userContextConnection('lol')
export default class Test extends Component {
  render () {
    return (
      <div className='Test'>
        <div style={{color: 'white', fontSize: '4vw'}}>Бла.Бла.Бла!</div>
      </div>
    )
  }
}
