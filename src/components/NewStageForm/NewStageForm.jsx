import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './NewStageForm.css'
import Api from 'api/Api'
import FormInput from 'ui/Form/FormInput'
import Form from 'ui/Form'

export default class NewStageForm extends Component {
  state = {
    created: false,
    id: false,
    description: false,
    name: false,
    upload_progress: false,
    title: false,
    image: false,
    is_in_progress: false,
  }

  render () {
    const {
      state: {
        is_in_progress,
        upload_progress,
        created,
        name
      },
      onSubmit
    } = this

    if (created) return <div>Сцена <strong>{name}</strong> создана</div>

    return (
      <div className='NewStageForm'>
        <Form {...{onSubmit, progress: upload_progress}}>
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
          <button disabled={is_in_progress}>Создать</button>
        </Form>
        {is_in_progress && <h1>Данные отправляются</h1>}
      </div>
    )
  }

  onSubmit = (data) => {
    Api.put('stages', data, this, {progress_prop_name: 'is_in_progress'})
  }

  componentDidMount () {
    console.log(' → ', ReactDOM.findDOMNode(this).querySelector('form input'), ' ← ReactDOM.findDOMNode(this) | ')
  }
}
