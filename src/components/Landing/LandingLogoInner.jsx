import React, { Component } from 'react'
import logo from './images/logo.png'
import leaf from './images/leaf.png'
import name from './images/name.png'

export default class LandingLogoInner extends Component {
  render () {
    return (
      <div>
        <div>
          <img src={logo} alt="Логотип" className="Landing-logo-image" />
        </div>
        <div>
          <img src={name} alt="Логотип" className="Landing-logo-name" />
        </div>
        <div>
          <img src={leaf} alt="Логотип" className="Landing-logo-leaf" />
        </div>
      </div>
    )
  }
}
