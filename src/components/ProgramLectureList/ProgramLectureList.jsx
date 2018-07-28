import React, { Component } from 'react'
import './ProgramLectureList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_LECTURE_URL } from 'constants/URL'
import lecturesContextConnection from 'context/Lectures/lecturesContextConnection'
import _ from 'lodash'
import ProgramLectureListItem from 'components/ProgramLectureList/ProgramLectureListItem'
import ActionButton from 'components/ActionButton'

@lecturesContextConnection
export default class ProgramLectureList extends Component {
  render () {
    const {
      props: {
        lectures_list
      }
    } = this
    return (
      <div className='ProgramLectureList'>
        <Container>
          <PageTitle>
            Список лекций
          </PageTitle>
          <nav>
            <ul className='ProgramMasterClassList-ul'>
              {_.map(lectures_list, (lecture, key) => {
                return (
                  <li key={key}>
                    <ProgramLectureListItem {...lecture} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_LECTURE_URL} title={'Добавить новую лекцию'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}
