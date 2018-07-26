import React, { Component } from 'react'
import InformationsContext from './InformationsContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import informations_initial_state from 'context/Informations/informations_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class InformationsState extends Component {
    state = informations_initial_state

    render () {
      const {
        deleteInformation, restoreInformation, addInformation, updateInformation,
        getInformationByName, getInformationById
      } = this

      return (
        <InformationsContext.Provider
          value={{
            ...this.state,
            deleteInformation,
            restoreInformation,
            addInformation,
            updateInformation,
            getInformationByName,
            getInformationById
          }}
        >
          <WrappedComponent />
        </InformationsContext.Provider>
      )
    }

    _loadInformations = () => {
      Api.get('informations', this, {progress_prop_name: 'informations_loading'})
      return this
    }
    addInformation = (data) => {
      return Api.put('informations', data, this, {
        progress_prop_name: 'add_information_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'informations_list'
      })
    }
    deleteInformation = (id) => {
      Api.delete(['informations', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.informations_list[id].deleted = true
               return state
             }
           )
         })
    }
    getInformationById = (information_id) => {
      const {
        state: {
          informations_list
        }
      } = this

      return informations_list[information_id]
    }
    getInformationByName = (information_name) => {
      const {
        state: {
          informations_list
        }
      } = this,
        filtred = _.filter(informations_list, ({name}) => {
          return name === information_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreInformation = (id) => {

      Api.get(['informations/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.informations_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateInformation = (id, data) => {
      return Api.put('/informations/update/' + id, data, this, {
        progress_prop_name: 'update_information_progress',
        errors_prop_name: 'update_information_form_errors',
        data_section_name: 'informations_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadInformations()

    }

  }
}
