import { Component } from 'react'

export default class CreatePageExtend extends Component {

  resetForm = () => {
    this.setState(
      (state) => {
        return {
          ...state,
          created: false
        }
      }
    )
    window.scrollTo(0,0)
  }

}
