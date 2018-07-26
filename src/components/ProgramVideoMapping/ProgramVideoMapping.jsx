import React, { Component } from 'react'
import './ProgramVideoMapping.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import pagesContextConnection from 'context/Pages/pagesContextConnection'
import NewPageForm from 'components/NewPageForm/NewPageForm'
import { IMAGES_URL } from 'constants/API'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import { EDIT_PAGE_URL } from 'constants/URL'
import Interface from 'containers/Interface'

@pagesContextConnection
export default class ProgramVideoMapping extends Component {
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

    if (!page) return <NewPageForm name={page_name} section={'program'} />

    return (
      <div className='ProgramVideoMapping'>
        <Container>
          <PageTitle>
            {title}
          </PageTitle>

          <div className='ProgramVideoMapping-description'>
            {description}
          </div>
          <div>
            <img
              src={IMAGES_URL + '/size400/' + image} alt={title}
              className='ProgramVideoMapping-image'
            />
          </div>
          <div>
            <Interface need_admin>
              <Button>
                <Link
                  to={[EDIT_PAGE_URL, id, 'program'].join('/')}
                >
                  Редактировать
                </Link>
              </Button>
            </Interface>
          </div>
        </Container>
      </div>
    )
  }

  page_name = 'video-mapping'
}
