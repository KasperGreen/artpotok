import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import Container from 'components/Container'

export default class PageNotFoundContainer extends Component {
  render () {
    return (
      <PageWrapper>
        <Container>
          <div className='PageNotFound'>
            <h1>Страница не найдена</h1>
          </div>
        </Container>
      </PageWrapper>
    )
  }
}
