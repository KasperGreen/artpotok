import React, { Component } from 'react'
import './PageTitle.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class PageTitle extends Component {

  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <h1
        className={classNames(
          'PageTitle'
        )}
      >
        {children}
      </h1>
    )
  }

  static propTypes = {
    children: PropTypes.node,
  }

}
