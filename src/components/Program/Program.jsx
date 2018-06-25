import React, { Component } from 'react'
import './Program.css'
import PageTitle from 'components/PageTitle/PageTitle'
import { Link } from 'react-router-dom'
import {
  LECTURE_URL,
  MASTER_CLASS_URL,
  MUSIC_URL,
  PRACTICE_URL,
  TECHNO_ASHRAM_URL,
  VIDEO_MAPPING_URL,
  VJ_URL
} from 'constants/URL'
import Container from 'components/Container'

export default class Program extends Component {
  render () {
    return (
      <section className='Program'>
        <Container>
          <PageTitle>
            Программа
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={MUSIC_URL}>
                  Музыка
                </Link>
              </li>
              <li>
                <Link to={MASTER_CLASS_URL}>
                  Мастер-Классы
                </Link>
              </li>
              <li>
                <Link to={VJ_URL}>
                  Виджеи
                </Link>
              </li>
              <li>
                <Link to={VIDEO_MAPPING_URL}>
                  Видеомэппинг
                </Link>
              </li>
              <li>
                <Link to={LECTURE_URL}>
                  Лекции
                </Link>
              </li>
              <li>
                <Link to={PRACTICE_URL}>
                  Практики
                </Link>
              </li>
              <li>
                <Link to={TECHNO_ASHRAM_URL}>
                  Техно-Ашрам
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    )
  }
}
