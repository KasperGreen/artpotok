import React, { Component } from 'react'
import PageWrapper from 'components/PageWrapper'
import Logout from 'components/Logout'
import userContextConnection from 'context/User/userContextConnection'
import PropTypes from 'prop-types'
import LogoutContainerAction from 'containers/LogoutContainer/LogoutContainerAction'

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
         <Logout />
         :
         <LogoutContainerAction {...{logout}} />
        }
      </PageWrapper>
    )
  }

  static propTypes = {
    is_guest: PropTypes.bool,
    logout: PropTypes.func
  }

}
