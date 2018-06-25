import React, { Component } from 'react'
import './ProgramLectureList.css'
import { LECTURE_URL } from 'constants/URL'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
export default class ProgramLectureList extends Component {
  render () {
    return (
      <div className='ProgramLectureList'>
        <Container>
          <PageTitle>
            Лекции
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={LECTURE_URL + '/lecture_example'}>
                  Пример леции
                </Link>
              </li>
              <li>
                <Link to={LECTURE_URL + '/other_lecture_example'}>
                  Пример другой леции
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}
