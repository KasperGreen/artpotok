import React, { Component } from 'react'
import './ProgramPracticeList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { PRACTICE_URL } from 'constants/URL'

export default class ProgramPracticeList extends Component {
  render () {
    return (
      <div className='ProgramPracticeList'>
        <Container>
          <PageTitle>
            Список практик
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={PRACTICE_URL + '/practice_example'}>
                  Пример практики
                </Link>
              </li>
              <li>
                <Link to={PRACTICE_URL + '/other_practice_example'}>
                  Пример другой практики
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}
