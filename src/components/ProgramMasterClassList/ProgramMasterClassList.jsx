import React, { Component } from 'react'
import './ProgramMasterClassList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_MASTER_CLASS_URL } from 'constants/URL'
import mastersContextConnection from 'context/Masters/mastersContextConnection'
import ActionButton from 'components/ActionButton'
import _ from 'lodash'
import ProgramMasterClassListItem from 'components/ProgramMasterClassList/ProgramMasterClassListItem'

@mastersContextConnection
export default class ProgramMasterClassList extends Component {
  render () {
    const {
      props: {
        masters_list
      }
    } = this
    return (
      <div className='ProgramMasterClassList'>
        <Container>
          <PageTitle>
            Мастер-Классы
          </PageTitle>
          <nav>
            <ul className='ProgramMasterClassList-ul'>
              {_.map(masters_list, (master, key) => {
                return (
                  <li key={key}>
                    <ProgramMasterClassListItem {...master} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_MASTER_CLASS_URL} title={'Добавить новый мастер-класс'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}
