import React, { Component } from 'react'
import './ProgramList.css'
import {
  LECTURE_URL,
  MASTER_CLASS_URL,
  MUSIC_URL,
  PRACTICE_URL,
  TECHNO_ASHRAM_URL,
  VIDEO_MAPPING_URL,
  VJ_URL
} from 'constants/URL'
import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'

const links = [
  {
    url: MUSIC_URL,
    title: 'Музыка'
  }, {
    url: MASTER_CLASS_URL,
    title: 'Мастер-Классы'
  }, {
    url: VJ_URL,
    title: 'Виджеи'
  }, {
    url: VIDEO_MAPPING_URL,
    title: 'Видеомэппинг'
  }, {
    url: LECTURE_URL,
    title: 'Лекции'
  }, {
    url: PRACTICE_URL,
    title: 'Практики'
  }, {
    url: TECHNO_ASHRAM_URL,
    title: 'Техно-Ашрам'
  },

]
export default class ProgramList extends Component {
  render () {
    return (
      <nav className='ProgramList'>
        <ul className='ProgramList-flex'>
          {links.map(({url, title}, key) => {
            return (
              <li key={key}>
                <Button>
                  <Link to={url}>
                    {title}
                  </Link>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
