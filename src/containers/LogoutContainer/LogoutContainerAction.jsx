import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LogoutContainerAction extends Component {
  render () {
    return <div></div>
  }

  componentDidMount () {
    this.props.logout()
  }

  static propTypes = {
    logout: PropTypes.func,
  }

}
