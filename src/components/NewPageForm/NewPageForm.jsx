import React, { Component } from 'react'
import './NewPageForm.css'
import Container from 'components/Container'
import Form from 'ui/Form'
import FormInput from 'ui/Form/FormInput'
import Button from 'components/Button'
import FormTextArea from 'ui/Form/FormTextArea'
import pagesContextConnection from 'context/Pages/pagesContextConnection'
import _ from 'lodash'

@pagesContextConnection('context')
export default class NewPageForm extends Component {
  state = {
    created: false
  }

  render () {
    const {
      props: {
        context: {
          add_page_progress,
          add_form_errors
        }
      },
      onSubmit
    } = this

    return (
      <div className='NewPageForm'>
        <Container>
          <h2 className='NewPageForm-title'>
            Новая страница
          </h2>
          <Form {...{
            default_form_data: {
              name: this.props.name
            },
            onSubmit,
            progress: add_page_progress,
            errors: add_form_errors,
          }}>
            <FormInput
              required
              name={'title'}
              label={'Название сцены'}
              placeholder={'Новая сцена'}
            />
            <FormTextArea
              required
              name={'description'}
              label={'Текст страницы'}
            />
            <FormInput
              file
              required
              label={'Изображение'}
              name={'image'}
            />
            <div className='NewPageForm-buttons'>
              <Button disabled={add_page_progress}>Сохранить</Button>
            </div>
          </Form>
          {add_page_progress && <h1>Данные отправляются</h1>}
        </Container>
      </div>
    )
  }

  onSubmit = (data) => {
    this.props.context.addPage(data).then((response) => {

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
