import React, { Component } from 'react'
import AshramsContext from './AshramsContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import ashrams_initial_state from 'context/Ashrams/ashrams_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class AshramsState extends Component {
    state = ashrams_initial_state

    render () {
      const {
        deleteAshram, restoreAshram, addAshram, updateAshram,
        getAshramByName, getAshramById
      } = this

      return (
        <AshramsContext.Provider
          value={{
            ...this.state,
            deleteAshram,
            restoreAshram,
            addAshram,
            updateAshram,
            getAshramByName,
            getAshramById
          }}
        >
          <WrappedComponent />
        </AshramsContext.Provider>
      )
    }

    _loadAshrams = () => {
      Api.get('ashrams', this, {progress_prop_name: 'ashrams_loading'})
      return this
    }
    addAshram = (data) => {
      return Api.put('ashrams', data, this, {
        progress_prop_name: 'add_ashram_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'ashrams_list'
      })
    }
    deleteAshram = (id) => {
      Api.delete(['ashrams', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.ashrams_list[id].deleted = true
               return state
             }
           )
         })
    }
    getAshramById = (ashram_id) => {
      const {
        state: {
          ashrams_list
        }
      } = this

      return ashrams_list[ashram_id]
    }
    getAshramByName = (ashram_name) => {
      const {
        state: {
          ashrams_list
        }
      } = this,
        filtred = _.filter(ashrams_list, ({name}) => {
          return name === ashram_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreAshram = (id) => {

      Api.get(['ashrams/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.ashrams_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateAshram = (id, data) => {
      return Api.put('/ashrams/update/' + id, data, this, {
        progress_prop_name: 'update_ashram_progress',
        errors_prop_name: 'update_ashram_form_errors',
        data_section_name: 'ashrams_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadAshrams()

    }

  }
}
