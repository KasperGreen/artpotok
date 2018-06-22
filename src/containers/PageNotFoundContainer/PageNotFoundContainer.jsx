import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'

export default class PageNotFoundContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <div className='PageNotFound'>
          <h1>Страница не найдена</h1>
        </div>
      </PageWrapper>
    )
  }
}
