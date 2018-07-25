import React, { Component } from 'react'
import PracticesContext from './PracticesContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import practices_initial_state from 'context/Practices/practices_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class PracticesState extends Component {
    state = practices_initial_state

    render () {
      const {
        deletePractice, restorePractice, addPractice, updatePractice,
        getPracticeByName, getPracticeById
      } = this

      return (
        <PracticesContext.Provider
          value={{
            ...this.state,
            deletePractice,
            restorePractice,
            addPractice,
            updatePractice,
            getPracticeByName,
            getPracticeById
          }}
        >
          <WrappedComponent />
        </PracticesContext.Provider>
      )
    }

    _loadPractices = () => {
      Api.get('practices', this, {progress_prop_name: 'practices_loading'})
      return this
    }
    addPractice = (data) => {
      return Api.put('practices', data, this, {
        progress_prop_name: 'add_practice_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'practices_list'
      })
    }
    deletePractice = (id) => {
      Api.delete(['practices', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.practices_list[id].deleted = true
               return state
             }
           )
         })
    }
    getPracticeById = (practice_id) => {
      const {
        state: {
          practices_list
        }
      } = this

      return practices_list[practice_id]
    }
    getPracticeByName = (practice_name) => {
      const {
        state: {
          practices_list
        }
      } = this,
        filtred = _.filter(practices_list, ({name}) => {
          return name === practice_name
        })

      return _.head(_.toArray(filtred))

    }
    restorePractice = (id) => {

      Api.get(['practices/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.practices_list[id].deleted = false
               return state
             }
           )
         })
    }
    updatePractice = (id, data) => {
      return Api.put('/practices/update/' + id, data, this, {
        progress_prop_name: 'update_practice_progress',
        errors_prop_name: 'update_practice_form_errors',
        data_section_name: 'practices_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadPractices()

    }

  }
}
