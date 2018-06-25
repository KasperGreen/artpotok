import React, { Component } from 'react'
import './ProgramMasterClass.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import PropTypes from 'prop-types'

export default class ProgramMasterClass extends Component {
  render () {
    const {
      props: {
        master_class_name
      }
    } = this
    return (
      <div className='ProgramMasterClass'>
        <Container>
          <PageTitle>Мастер-класс {master_class_name}</PageTitle>
        </Container>
      </div>
    )
  }

  static propTypes = {
    master_class_name: PropTypes.string,
  }

}
