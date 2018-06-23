import React, { Component } from 'react'
import './Program.css'
import PageTitle from 'components/PageTitle/PageTitle'
import { Link } from 'react-router-dom'
import { PROGRAM_URL } from 'constants/URL'

export default class Program extends Component {
  render () {
    return (
      <section className='Program'>
        <PageTitle>
          Программа
        </PageTitle>
        <nav>
          <ul>
            <li>
              <Link to={'/' + PROGRAM_URL + '/music'}>
                Музыка
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}
