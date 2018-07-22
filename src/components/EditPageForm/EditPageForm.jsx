import React, { Component } from 'react'
import './EditPageForm.css'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import FormTextArea from 'ui/Form/FormTextArea'
import Container from 'components/Container'
import _ from 'lodash'
import pagesContextConnection from 'context/Pages/pagesContextConnection'
import Button from 'components/Button'
import PageTitle from 'components/PageTitle'
import { Redirect } from 'react-router-dom'

@pagesContextConnection
export default class EditPageForm extends Component {
  state = {
    updated: false
  }

  render () {
    const {
        onSubmit,
        props: {
          update_page_form_errors,
          update_page_progress,
          getPageById,
          match: {
            params: {
              page_id,
              section_name
            }
          },
        },
        state: {
          updated
        }
      } = this,
      page_data = getPageById(page_id),
      {name, title, description} = page_data || {}

    if (!page_data) return <div>Загрузка</div>

    if (updated) return (
      <div>
        <div>
          Страница <strong>{name}</strong> Обновлена.
        </div>
        <Redirect to={'/' + [section_name, name].join('/')} />
      </div>)

    return (
      <div className='EditPageForm'>
        <Container>
          <PageTitle>
            Редактор Страницы
          </PageTitle>
          {page_data &&
          <Form {...{onSubmit}}
                progress={update_page_progress}
                default_form_data={{title, description, name, section: section_name}}
                errors={update_page_form_errors}
          >
            <FormInput
              required
              label={'Название'}
              name='title'
            />
            <FormTextArea
              required
              label={'Описание'}
              name='description'
            />
            <FormInput
              file
              label={'Изображение'}
              name='image'
            />
            <Button disabled={update_page_progress}>Сохранить</Button>
          </Form>
          }
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    const {
      props: {
        updatePage,
        match: {
          params: {
            page_id
          }
        }
      }
    } = this

    updatePage(page_id, data).then((response) => {
      this.setState(
        (state) => {
          return {
            ...state,
            ..._.head(_.toArray(response.data))
          }
        }
      )
    })
  }

}
