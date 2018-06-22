import React, { Component } from 'react'
import Landing from 'components/Landing'
import { Link } from 'react-router-dom'

export default class MainContainer extends Component {

  render () {
    return (
      <Link to={'/about'} style={{display: 'block'}}>
        <Landing />
      </Link>
    )
  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }
}
