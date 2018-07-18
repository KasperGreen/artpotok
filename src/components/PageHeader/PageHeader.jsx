import React, { Component } from 'react'
import './PageHeader.css'
import Container from 'components/Container'
import PageHeaderLogo from 'components/PageHeader/PageHeaderLogo'
import PageHeaderMenu from 'components/PageHeader/PageHeaderMenu'
import PageHeaderUser from 'components/PageHeader/PageHeaderUser'

export default class PageHeader extends Component {

  render () {
    return (
      <header className="PageHeader">
        <Container>
          <div className='PageHeader-inner'>
            <PageHeaderLogo />
            <PageHeaderUser />
            <PageHeaderMenu />
          </div>
        </Container>
      </header>
    )
  }
}
