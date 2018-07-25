import React, { Component } from 'react'
import './ProgramTechnoAshramList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_ASHRAM_URL } from 'constants/URL'
import ashramsContextConnection from 'context/Ashrams/ashramsContextConnection'
import _ from 'lodash'
import ProgramTechnoAshramListItem from 'components/ProgramTechnoAshram/ProgramTechnoAshramListItem'
import ActionButton from 'components/ActionButton'

@ashramsContextConnection
export default class ProgramTechnoAshramList extends Component {
  render () {
    const {
      props: {
        ashrams_list
      }
    } = this
    return (
      <div className='ProgramTechnoAshramList'>
        <Container>
          <PageTitle>
            Техно-Ашрам
          </PageTitle>
          <nav>
            <ul className='ProgramMasterClassList-ul'>
              {_.map(ashrams_list, (ashram, key) => {
                return (
                  <li key={key}>
                    <ProgramTechnoAshramListItem {...ashram} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_ASHRAM_URL} title={'Добавить новую практику'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}
