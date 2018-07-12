import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './NewStageForm.css'
import Api from 'api/Api'
import Input from 'templates/Form/Input'

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
        <form {...{onSubmit}}>
          <Input
            name={'name'}
            required
            label={'Имя латиницей для URL'}
            ControlledComponent={this}
          />
          <Input
            required
            name={'title'}
            label={'Название сцены'}
            ControlledComponent={this}
          />
          <Input
            required
            name={'description'}
            label={'Описание сцены'}
            ControlledComponent={this}
          />
          <Input
            file
            required
            label={'Изображение'}
            name={'image'}
            ControlledComponent={this}
          />
          <button>Создать</button>
        </form>
        {is_in_progress && <h1>Данные отправляются</h1>}
      </div>
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {
      state: {
        form
      }
    } = this
    Api.put('stage', form, this, 'is_in_progress')
  }

  componentDidMount () {
    console.log(' → ', ReactDOM.findDOMNode(this).querySelector('form input'), ' ← ReactDOM.findDOMNode(this) | ')
  }
}
