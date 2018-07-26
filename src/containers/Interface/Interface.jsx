import React, { Component, Fragment } from 'react'
import userContextConnection from 'context/User/userContextConnection'
import PropTypes from 'prop-types'

@userContextConnection('user')
export default class Interface extends Component {
  render () {
    const {
      props: {
        need_admin,
        children
      },
      user: {
        is_admin
      } = {}
    } = this
    if (need_admin & !is_admin) return false
    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }

  static propTypes = {
    need_admin: PropTypes.bool,
  }

}
