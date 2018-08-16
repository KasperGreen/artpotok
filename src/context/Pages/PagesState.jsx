import React, { Component } from 'react'
import PagesContext from './PagesContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import pages_initial_state from 'context/Pages/pages_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class PagesState extends Component {
    state = pages_initial_state
    storage_name = 'Pages'
    render () {
      const {
        deletePage, restorePage, addPage, updatePage,
        getPageByName, getPageById
      } = this

      return (
        <PagesContext.Provider
          value={{
            ...this.state,
            deletePage,
            restorePage,
            addPage,
            updatePage,
            getPageByName,
            getPageById
          }}
        >
          <WrappedComponent />
        </PagesContext.Provider>
      )
    }

    _loadPages = () => {
      Api.get('pages', this, {progress_prop_name: 'pages_loading'})
      return this
    }
    addPage = (data) => {
      return Api.put('pages', data, this, {
        progress_prop_name: 'add_page_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'pages_list'
      })
    }
    deletePage = (id) => {
      Api.delete(['pages', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.pages_list[id].deleted = true
               return state
             }
           )
         })
    }
    getPageById = (page_id) => {
      const {
        state: {
          pages_list
        }
      } = this

      return pages_list[page_id]
    }
    getPageByName = (page_name) => {
      const {
        state: {
          pages_list
        }
      } = this,
        filtred = _.filter(pages_list, ({name}) => {
          return name === page_name
        })

      return _.head(_.toArray(filtred))

    }
    restorePage = (id) => {

      Api.get(['pages/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.pages_list[id].deleted = false
               return state
             }
           )
         })
    }
    updatePage = (id, data) => {
      return Api.put('/pages/update/' + id, data, this, {
        progress_prop_name: 'update_page_progress',
        errors_prop_name: 'update_page_form_errors',
        data_section_name: 'pages_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadPages()

    }

  }
}
