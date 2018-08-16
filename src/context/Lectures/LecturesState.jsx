import React, { Component } from 'react'
import LecturesContext from './LecturesContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import lectures_initial_state from 'context/Lectures/lectures_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class LecturesState extends Component {
    storage_name = 'Lectures'

    state = lectures_initial_state

    render () {
      const {
        deleteLecture, restoreLecture, addLecture, updateLecture,
        getLectureByName, getLectureById
      } = this

      return (
        <LecturesContext.Provider
          value={{
            ...this.state,
            deleteLecture,
            restoreLecture,
            addLecture,
            updateLecture,
            getLectureByName,
            getLectureById
          }}
        >
          <WrappedComponent />
        </LecturesContext.Provider>
      )
    }

    _loadLectures = () => {
      Api.get('lectures', this, {progress_prop_name: 'lectures_loading'})
      return this
    }
    addLecture = (data) => {
      return Api.put('lectures', data, this, {
        progress_prop_name: 'add_lecture_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'lectures_list'
      })
    }
    deleteLecture = (id) => {
      Api.delete(['lectures', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.lectures_list[id].deleted = true
               return state
             }
           )
         })
    }
    getLectureById = (lecture_id) => {
      const {
        state: {
          lectures_list
        }
      } = this

      return lectures_list[lecture_id]
    }
    getLectureByName = (lecture_name) => {
      const {
        state: {
          lectures_list
        }
      } = this,
        filtred = _.filter(lectures_list, ({name}) => {
          return name === lecture_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreLecture = (id) => {

      Api.get(['lectures/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.lectures_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateLecture = (id, data) => {
      return Api.put('/lectures/update/' + id, data, this, {
        progress_prop_name: 'update_lecture_progress',
        errors_prop_name: 'update_lecture_form_errors',
        data_section_name: 'lectures_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadLectures()

    }

  }
}
