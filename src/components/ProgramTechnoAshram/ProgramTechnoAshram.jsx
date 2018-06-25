import React, { Component } from 'react'
import './ProgramTechnoAshram.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { TECHNO_ASHRAM_URL } from 'constants/URL'
export default class ProgramTechnoAshram extends Component {
  render () {
    return (
      <div className='ProgramTechnoAshram'>
        <Container>
          <PageTitle>
            Техно-Ашрам
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={TECHNO_ASHRAM_URL + '/event_example'}>
                  Пример практики
                </Link>
              </li>
              <li>
                <Link to={TECHNO_ASHRAM_URL + '/other_event_example'}>
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
