import React, { Component } from 'react'
import './PageHeaderMenu.css'
import classNames from 'classnames'
import menu from 'components/PageHeader/data/page_header_menu'
import { NavLink } from 'react-router-dom'
import Button from 'components/Button/Button'

export default class PageHeaderMenu extends Component {

  state = {
    menu_is_opened: false
  }

  render () {
    const {
      state: {
        menu_is_opened
      },
      toggleMenu,
      closeMenu
    } = this
    return (
      <nav
        className={classNames(
          'PageHeaderMenu',
          {
            menu_is_opened
          })}
      >
        <button className='PageHeaderMenu-mobile_menu_button' onClick={toggleMenu}>
          {menu_is_opened ? 'Закрыть' : 'Меню'}
        </button>
        <ul className='PageHeaderMenu-links'>
          {menu.map(({to, title}, key) => {
            return (
              <li key={key} className='PageHeaderMenu-item ml-m'>
                <Button>
                  <NavLink
                    className='PageHeaderMenu-item-link'
                    activeClassName='PageHeaderMenu-item-link-active'
                    {...{to, onClick: closeMenu}}>
                    {title}
                  </NavLink>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  closeMenu = () => {
    this.setState(
      (state) => {
        return {
          ...state,
          menu_is_opened: false
        }
      }
    )
  }
  openMenu = () => {
    this.setState(
      (state) => {
        return {
          ...state,
          menu_is_opened: false
        }
      }
    )
  }
  toggleMenu = () => {
    this.setState(
      (state) => {
        return {
          ...state,
          menu_is_opened: !state.menu_is_opened
        }
      }
    )
  }
  toggleState = (name = 'menu_is_opened') => {
    this.setState(
      (state) => {
        return {
          ...state,
          [name]: !state[name]
        }
      }
    )
  }
}
