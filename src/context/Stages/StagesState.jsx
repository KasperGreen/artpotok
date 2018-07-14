import React, { Component } from 'react'
import StagesContext from './StagesContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import stages_initial_state from 'context/Stages/stages_initial_state'

export default function (WrappedComponent) {
  return class StagesState extends Component {
    state = stages_initial_state

    render () {
      const {
        deleteStage, restoreStage
      } = this

      return (
        <StagesContext.Provider
          value={{
            ...this.state,
            deleteStage,
            restoreStage
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

    deleteStage = (id) => {
      Api.delete(['stages', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               return {
                 ...state,
                 stages_list: {
                   ...state.stages_list,
                   [id]: {
                     ...state.stages_list[id],
                     deleted: true
                   }
                 },
               }
             }
           )
         })
    }

    restoreStage = (id) => {

      Api.get(['stages/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               return {
                 ...state,
                 stages_list: {
                   ...state.stages_list,
                   [id]: {
                     ...state.stages_list[id],
                     deleted: false
                   }
                 },
               }
             }
           )
         })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadStages()

    }

  }
}
