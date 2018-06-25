import React, { Component } from 'react'
import './ProgramMusicStage.css'
import PageTitle from 'components/PageTitle/PageTitle'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MUSIC_URL } from 'constants/URL'
import Container from 'components/Container'

export default class ProgramMusicStage extends Component {
  render () {
    const {
      props: {
        stage
      }
    } = this
    return (
      <div className='ProgramMusicStage'>
        <Container>
          <PageTitle>
            Сцена {stage}
          </PageTitle>
          <nav>
            <ul>
              <li>
                <Link to={MUSIC_URL + '/' + stage + '/artist_name_example'}>
                  Пример артиста
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }

  static propTypes = {
    stage: PropTypes.string,
  }

}
