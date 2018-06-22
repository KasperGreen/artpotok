import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
import PageFooter from 'components/PageFooter'
import './PageWrapper.css'

export default class PageWrapper extends Component {
  render () {
    const {
      props: {
        children,
      }
    } = this
    return (
      <div className='PageWrapper'>
        <PageHeader />
        <main className='PageWrapper-main'>
          {children}
        </main>
        <PageFooter />
      </div>
    )
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }
}
