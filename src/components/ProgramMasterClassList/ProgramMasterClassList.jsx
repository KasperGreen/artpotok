import React, { Component } from 'react'
import './ProgramMasterClassList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { MASTER_CLASS_URL } from 'constants/URL'

export default class ProgramMasterClassList extends Component {
  render () {
    return (
      <div className='ProgramMasterClassList'>
        <Container>
          <PageTitle>
            Мастер-Классы
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={MASTER_CLASS_URL + '/master-class-name-example'}>
                  Пример мастер-класса
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}
