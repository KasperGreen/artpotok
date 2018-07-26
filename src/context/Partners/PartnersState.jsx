import React, { Component } from 'react'
import PartnersContext from './PartnersContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import partners_initial_state from 'context/Partners/partners_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class PartnersState extends Component {
    state = partners_initial_state

    render () {
      const {
        deletePartner, restorePartner, addPartner, updatePartner,
        getPartnerByName, getPartnerById
      } = this

      return (
        <PartnersContext.Provider
          value={{
            ...this.state,
            deletePartner,
            restorePartner,
            addPartner,
            updatePartner,
            getPartnerByName,
            getPartnerById
          }}
        >
          <WrappedComponent />
        </PartnersContext.Provider>
      )
    }

    _loadPartners = () => {
      Api.get('partners', this, {progress_prop_name: 'partners_loading'})
      return this
    }
    addPartner = (data) => {
      return Api.put('partners', data, this, {
        progress_prop_name: 'add_partner_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'partners_list'
      })
    }
    deletePartner = (id) => {
      Api.delete(['partners', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.partners_list[id].deleted = true
               return state
             }
           )
         })
    }
    getPartnerById = (partner_id) => {
      const {
        state: {
          partners_list
        }
      } = this

      return partners_list[partner_id]
    }
    getPartnerByName = (partner_name) => {
      const {
        state: {
          partners_list
        }
      } = this,
        filtred = _.filter(partners_list, ({name}) => {
          return name === partner_name
        })

      return _.head(_.toArray(filtred))

    }
    restorePartner = (id) => {

      Api.get(['partners/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.partners_list[id].deleted = false
               return state
             }
           )
         })
    }
    updatePartner = (id, data) => {
      return Api.put('/partners/update/' + id, data, this, {
        progress_prop_name: 'update_partner_progress',
        errors_prop_name: 'update_partner_form_errors',
        data_section_name: 'partners_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadPartners()

    }

  }
}
