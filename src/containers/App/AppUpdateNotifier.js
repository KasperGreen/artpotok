import React, { Component } from 'react'
import './AppUpdateNotifier.css'
import text from './data/app_text'

export default class AppUpdateNotifier extends Component {
  state = {
    is_updated: false,
    show_update_notification: true
  }

  render () {
    const {
      state: {
        is_updated, show_update_notification
      },
      reloadPage,
      hideUpdateNotification
    } = this
    if (!is_updated || !show_update_notification) return false
    return (
      <div className='AppUpdateNotifier'>
        <div className='AppUpdateNotifier-text'>
          {text.app_updated_text}
        </div>
        <div className='AppUpdateNotifier-buttons'>
          <button
            className='AppUpdateNotifier-buttons-reload'
            onClick={reloadPage}
          >
            {text.button_update}
          </button>
          <button
            className='AppUpdateNotifier-buttons-hide'
            onClick={hideUpdateNotification}
          >
            {text.button_hide}
          </button>
        </div>

      </div>
    )
  }

  _registerServiceWorkerOnUpdate = () => {
    if (typeof navigator.serviceWorker === 'undefined') return this

    navigator.serviceWorker.ready.then((sw) => {
      sw.active.onstatechange = () => {
        window.isUpdateAvailable.then(is_updated => {
          if (is_updated) {
            this.setState(
              {
                ...this.state,
                is_updated: true
              }
            )
          }
        })
      }

    })

    return this
  }
  hideUpdateNotification = () => {
    this.setState((state) => {
      return {
        ...state,
        show_update_notification: false
      }
    })
  }
  reloadPage = () => {
    window.location.reload()
  }

  componentDidMount () {
    this._registerServiceWorkerOnUpdate()
  }

}
