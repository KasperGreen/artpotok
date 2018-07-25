import React, { Component } from 'react'
import './About.css'
import PageTitle from 'components/PageTitle/PageTitle'
import Container from 'components/Container'
import Text from 'templates'
import userContextConnection from 'context/User/userContextConnection'
import work_image from './images/work.png'
@userContextConnection('user')
export default class About extends Component {

  render () {
    const {
      props: {
        user: {
          is_logged_in,
          name
        }
      }
    } = this
    return (
      <div className='About'>
        <Container>
          <PageTitle>
            Администрация В Потоке
          </PageTitle>
          <Text>
            Привет, {is_logged_in ? name : 'Друг'}! Это Система Управления Потоком. Сокращённо — СУП.
            <img className='About-image' src={work_image} alt={'Администрация'} />
          </Text>

        </Container>
      </div>
    )
  }
}
