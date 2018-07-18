import React, { Component } from 'react'
import './PageHeaderUser.css'
import { LOGIN_URL, PROFILE_URL } from 'constants/URL'
import userContextConnection from 'context/User/userContextConnection'
import { NavLink, Route, Switch } from 'react-router-dom'

@userContextConnection
export default class PageHeaderUser extends Component {
  render () {
    const {
      props: {
        is_guest,
        name
      }
    } = this

    return (
      <div className='PageHeaderMenuUser'>
        <Switch>
          <Route path={'/profile'}>
            <h3>Профиль</h3>
          </Route>
          <Route>
            <NavLink
              to={is_guest ? LOGIN_URL : PROFILE_URL}
              activeStyle={{pointerEvents: 'none'}}
              className='PageHeaderMenu-menu-item-link'
              activeClassName='PageHeaderMenu-menu-item-link-active'
            >
              {is_guest ? 'Войти' : name}
            </NavLink>
          </Route>
        </Switch>
      </div>
    )
  }
}
