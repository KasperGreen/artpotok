import React, { Component } from 'react'
import logo_image from './images/logo.png'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'
import classNames from 'classnames'
import menu from './data/page_header_menu'
import Container from 'components/Container'

export default class PageHeader extends Component {
  state = {
    menu_opened: false,
    show_price_rising_notifier: false
  }

  render () {
    const {
      state: {
        menu_opened
      },
      menuToggle,
      menuClose
    } = this
    return (
      <header className="PageHeader">
        <Container>
          <div className='PageHeader-inner'>
            <div className="PageHeader-logo">
              <NavLink exact to="/">
                <img src={logo_image} alt={'Логотип Потока'} className='PageHeader-logo-image' />
              </NavLink>
            </div>
            <nav className={classNames('PageHeader-list', {'PageHeader-list-opened': menu_opened})}>
              <ul className='PageHeader-list-ul'>
                {menu.map(({to, title}, key) => {
                  return (
                    <li key={key} className='PageHeader-menu-item'>
                      <NavLink
                        className='PageHeader-menu-item-link'
                        activeClassName='PageHeader-menu-item-link-active'
                        {...{to, onClick: menuClose}}>
                        {title}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className='PageHeader-mobile_nav-icon' id="mobile_nav_icon" onClick={menuToggle} />
          </div>
        </Container>
      </header>
    )
  }

  menuClose = () => {
    this.setState({menu_opened: false})
  }
  menuOpen = () => {
    this.setState({menu_opened: true})
  }
  menuToggle = () => {
    const {
      state: {
        menu_opened
      }
    } = this

    this.setState({menu_opened: !menu_opened})
  }
}
