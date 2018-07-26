import React, { Component } from 'react'
import './InformationList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_PRACTICE_URL } from 'constants/URL'
import informationsContextConnection from 'context/Informations/informationsContextConnection'
import _ from 'lodash'
import InformationListItem from 'components/InformationList/InformationListItem'
import ActionButton from 'components/ActionButton'

@informationsContextConnection
export default class InformationList extends Component {
  render () {
    const {
      props: {
        informations_list
      }
    } = this
    return (
      <div className='InformationList'>
        <Container>
          <PageTitle>
            Список практик
          </PageTitle>
          <nav>
            <ul className='ProgramMasterClassList-ul'>
              {_.map(informations_list, (information, key) => {
                return (
                  <li key={key}>
                    <InformationListItem {...information} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_PRACTICE_URL} title={'Добавить новую практику'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}
