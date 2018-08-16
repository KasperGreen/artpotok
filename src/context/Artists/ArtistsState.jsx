import React, { Component } from 'react'
import ArtistsContext from './ArtistsContext'
import Api from 'api/Api'
import localforageHelper from 'helpers/localforageHelper'
import artists_initial_state from './artists_initial_state'
import _ from 'lodash'

export default function (WrappedComponent) {
  return class ArtistsState extends Component {
    storage_name = 'Artists'
    state = artists_initial_state

    render () {
      const {
        deleteArtist, restoreArtist, addArtist, updateArtist, getArtistById, getArtistByName
      } = this

      return (
        <ArtistsContext.Provider
          value={{
            ...this.state,
            deleteArtist,
            restoreArtist,
            addArtist,
            updateArtist,
            getArtistById,
            getArtistByName
          }}
        >
          <WrappedComponent />
        </ArtistsContext.Provider>
      )
    }

    _loadArtists = () => {
      Api.get('artists', this, {progress_prop_name: 'artists_loading'})
      return this
    }
    addArtist = (data) => {
      return Api.put('artists', data, this, {
        progress_prop_name: 'add_artist_progress',
        errors_prop_name: 'add_form_errors',
        data_section_name: 'artists_list'
      })
    }
    deleteArtist = (id) => {
      Api.delete(['artists', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.artists_list[id].deleted = true
               return state
             }
           )
         })
    }
    getArtistById = (artist_id) => {
      const {
        state: {
          artists_list
        }
      } = this

      return artists_list[artist_id]
    }
    getArtistByName = (artist_name) => {
      const {
          state: {
            artists_list
          }
        } = this,
        filtred = _.filter(artists_list, ({name}) => {
          return name === artist_name
        })

      return _.head(_.toArray(filtred))

    }
    restoreArtist = (id) => {

      Api.get(['artists/restore', id].join('/'), this)
         .then(() => {
           this.setState(
             (state) => {
               state.artists_list[id].deleted = false
               return state
             }
           )
         })
    }
    updateArtist = (id, data) => {
      return Api.put('/artists/update/' + id, data, this, {
        progress_prop_name: 'update_artist_progress',
        errors_prop_name: 'update_artist_form_errors',
        data_section_name: 'artists_list'
      })
    }

    componentDidMount () {

      localforageHelper.connectState(this)
      this._loadArtists()

    }

  }
}
