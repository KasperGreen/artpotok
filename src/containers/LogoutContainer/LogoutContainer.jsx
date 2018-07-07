import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import LogoutAfterMessage from 'components/LogoutAfterMessage'
import userContextConnection from 'context/User/userContextConnection'
import PropTypes from 'prop-types'
import LogoutContainerAction from 'containers/LogoutContainer/LogoutContainerAction'
import Confirmed from 'components/Confirmed'

@userContextConnection
export default class LogoutContainer extends Component {
  render () {
    const {
      props: {
        is_guest,
        logout
      }
    } = this
    return (
      <PageWrapper>
        {is_guest
         ?
         <LogoutAfterMessage />
         :
         <Confirmed content={<h2>Выходим?</h2>}>
           <LogoutContainerAction {...{logout}} />
         </Confirmed>
        }
      </PageWrapper>
    )
  }

  static propTypes = {
    is_guest: PropTypes.bool,
    logout: PropTypes.func
  }

}
