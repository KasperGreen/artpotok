import React, { Component } from 'react'
import './PageHeaderLogo.css'
import { NavLink } from 'react-router-dom'
import logo_image from './images/logo.png'

export default class PageHeaderLogo extends Component {
  render () {
    return (
      <div className="PageHeaderLogo">
        <NavLink exact to="/" className="PageHeaderLogo-link">
          <img src={logo_image} alt={'Логотип Потока'} className='PageHeaderLogo-image' />
        </NavLink>
      </div>
    )
  }
}
