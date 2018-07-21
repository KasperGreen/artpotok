import React, { Component } from 'react'
import './ProgramMusicStages.css'
import PropTypes from 'prop-types'
import ProgramMusicStagesStage from 'components/ProgramMusic/ProgramMusicStagesStage'
import _ from 'lodash'
export default class ProgramMusicStages extends Component {
  render () {
    const {
      props: {
        stages_list
      }
    } = this
    return (
      <nav className='ProgramMusicStages'>
        <ul className='ProgramMusicStages-list'>
          {_.map(stages_list, (stage, key) => {
            return (
              <li key={key}>
                <ProgramMusicStagesStage {...stage} />
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  static propTypes = {
    stages_list: PropTypes.object,
  }

}
