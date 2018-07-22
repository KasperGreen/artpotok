import React, { Component } from 'react'
import './ProgramVj.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import pagesContextConnection from 'context/Pages/pagesContextConnection'
import NewPageForm from 'components/NewPageForm/NewPageForm'

@pagesContextConnection
export default class ProgramVj extends Component {
  render () {
    const {
        props: {
          getPageByName
        },
        page_name
      } = this,
      page = getPageByName(page_name)
    console.log(' → ', page, ' ← page | ')

    if (!page) return <NewPageForm name={page_name} />

    return (
      <div className='ProgramVj'>
        <Container>
          <PageTitle>
            Страница про виджейство
          </PageTitle>
        </Container>
      </div>
    )
  }

  page_name = 'vj'
}
