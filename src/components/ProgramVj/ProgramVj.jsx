import React, { Component } from 'react'
import './ProgramVj.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import pagesContextConnection from 'context/Pages/pagesContextConnection'
import NewPageForm from 'components/NewPageForm/NewPageForm'
import { IMAGES_URL } from 'constants/API'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import { EDIT_PAGE_URL } from 'constants/URL'

@pagesContextConnection
export default class ProgramVj extends Component {
  render () {
    const {
        props: {
          getPageByName,
        },
        page_name
      } = this,
      page = getPageByName(page_name),
      {
        description,
        title,
        image,
        id
      } = page || {}

    if (!page) return <NewPageForm name={page_name} section={'program'}  />

    return (
      <div className='ProgramVj'>
        <Container>
          <PageTitle>
            {title}
          </PageTitle>

          <div className='ProgramVj-description'>
            {description}
          </div>
          <div>
            <img src={IMAGES_URL + '/size400/' + image} alt={title} className='ProgramVj-image' />
          </div>
          <div>
            <Button>
              <Link
                to={[EDIT_PAGE_URL, id, 'program'].join('/')}
              >
                Редактировать
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  page_name = 'vj'
}
