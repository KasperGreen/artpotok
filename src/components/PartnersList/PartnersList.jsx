import React, { Component } from 'react'
import './PartnersList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_PARTNER_URL } from 'constants/URL'
import partnersContextConnection from 'context/Partners/partnersContextConnection'
import _ from 'lodash'
import PartnersListItem from 'components/PartnersList/PartnersListItem'
import ActionButton from 'components/ActionButton'

@partnersContextConnection
export default class PartnersList extends Component {
  render () {
    const {
      props: {
        partners_list
      }
    } = this
    return (
      <div className='PartnersList'>
        <Container>
          <PageTitle>
            Список партнёров
          </PageTitle>
          <nav>
            <ul className='PartnersList-ul'>
              {_.map(partners_list, (partner, key) => {
                return (
                  <li key={key}>
                    <PartnersListItem {...partner} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_PARTNER_URL} title={'Добавить нового партнёра'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}
