import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './NewStageForm.css'
import Api from 'api/Api'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'

export default class NewStageForm extends Component {
  state = {
    form: {
      title: '',
      name: '',
      description: '',
      image: '',
    },
    created: false,
    id: false,
    description: false,
    name: false,
    title: false,
    image: false,
    is_in_progress: false,
  }

  render () {
    const {
      state: {
        is_in_progress
      },
      onSubmit
    } = this

    return (
      <div className='NewStageForm'>
        <Form {...{onSubmit}}>
          <FormInput
            name={'name'}
            required
            label={'Имя латиницей для URL'}
          />
          <FormInput
            required
            name={'title'}
            label={'Название сцены'}
          />
          <FormInput
            required
            name={'description'}
            label={'Описание сцены'}
          />
          <FormInput
            file
            required
            label={'Изображение'}
            name={'image'}
          />
          <button>Создать</button>
        </Form>
        {is_in_progress && <h1>Данные отправляются</h1>}
      </div>
    )
  }

  onSubmit = (data) => {
    Api.put('stage', data, this, 'is_in_progress')
  }

  componentDidMount () {
    console.log(' → ', ReactDOM.findDOMNode(this).querySelector('form input'), ' ← ReactDOM.findDOMNode(this) | ')
  }
}
