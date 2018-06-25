import React, { Component } from 'react'
import './ProgramPractice.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import PropTypes from 'prop-types'

export default class ProgramPractice extends Component {
  render () {
    const {
      props: {
        practice_name
      }
    } = this
    return (
      <div className='ProgramPractice'>
        <Container>
          <PageTitle>
            Практика {practice_name}
          </PageTitle>
        </Container>
      </div>
    )
  }

  static propTypes = {
    practice_name: PropTypes.string,
  }

}
