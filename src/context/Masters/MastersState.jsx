import React, { Component } from 'react'
import MastersContext from './MastersContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import masters_initial_state from 'context/Masters/masters_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class MastersState extends Component {
    storage_name = 'Masters'

    state = masters_initial_state

    render () {
      const {
        deleteMaster, restoreMaster, addMaster, updateMaster,
        getMasterByName, getMasterById
      } = this

      return (
        <MastersContext.Provider
          value={{
            ...this.state,
            deleteMaster,
            restoreMaster,
            addMaster,
            updateMaster,
            getMasterByName,
            getMasterById
          }}
        >
          <WrappedComponent />
        </MastersContext.Provider>
      )
    }

    _loadMasters = () => {
      Api.get('masters', this, {progress_prop_name: 'masters_loading'})
      return this
    }
    addMaster = (data) => {
      return Api.put('masters', data, this, {
        progress_prop_name: 'add_master_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'masters_list'
      })
    }
    deleteMaster = (id) => {
      Api.delete(['masters', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.masters_list[id].deleted = true
               return state
             }
           )
         })
    }
    getMasterById = (master_id) => {
      const {
        state: {
          masters_list
        }
      } = this

      return masters_list[master_id]
    }
    getMasterByName = (master_name) => {
      const {
        state: {
          masters_list
        }
      } = this,
        filtred = _.filter(masters_list, ({name}) => {
          return name === master_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreMaster = (id) => {

      Api.get(['masters/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.masters_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateMaster = (id, data) => {
      return Api.put('/masters/update/' + id, data, this, {
        progress_prop_name: 'update_master_progress',
        errors_prop_name: 'update_master_form_errors',
        data_section_name: 'masters_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadMasters()

    }

  }
}
