import React, { Component } from 'react'
import './ProgramLecture.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import PropTypes from 'prop-types'

export default class ProgramLecture extends Component {
  render () {
    const {
      props: {
        lecture_name
      }
    } = this

    return (
      <div className='ProgramLecture'>
        <Container>
          <PageTitle>
            Лекция {lecture_name}
          </PageTitle>
          Описание леции
        </Container>
      </div>
    )
  }

  static propTypes = {
    lecture_name: PropTypes.string,
  }

}
