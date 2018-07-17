import React, { Component } from 'react'
import StagesContext from './StagesContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import stages_initial_state from 'context/Stages/stages_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class StagesState extends Component {
    state = stages_initial_state

    render () {
      const {
        deleteStage, restoreStage, addStage, updateStage,
        getStageByName, getStageById
      } = this

      return (
        <StagesContext.Provider
          value={{
            ...this.state,
            deleteStage,
            restoreStage,
            addStage,
            updateStage,
            getStageByName,
            getStageById
          }}
        >
          <WrappedComponent />
        </StagesContext.Provider>
      )
    }

    _loadStages = () => {
      Api.get('stages', this, {progress_prop_name: 'stages_loading'})
      return this
    }
    addStage = (data) => {
      return Api.put('stages', data, this, {
        progress_prop_name: 'add_stage_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'stages_list'
      })
    }
    deleteStage = (id) => {
      Api.delete(['stages', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.stages_list[id].deleted = true
               return state
             }
           )
         })
    }
    getStageById = (stage_id) => {
      const {
        state: {
          stages_list
        }
      } = this

      return stages_list[stage_id]
    }
    getStageByName = (stage_name) => {
      const {
        state: {
          stages_list
        }
      } = this,
        filtred = _.filter(stages_list, ({name}) => {
          return name === stage_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreStage = (id) => {

      Api.get(['stages/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.stages_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateStage = (id, data) => {
      return Api.put('/stages/update/' + id, data, this, {
        progress_prop_name: 'update_stage_progress',
        errors_prop_name: 'update_stage_form_errors',
        data_section_name: 'stages_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadStages()

    }

  }
}
