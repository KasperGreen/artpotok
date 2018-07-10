import axios from 'axios'
import localforage from 'localforage'
import { API_URL } from 'constants/API'

const httpRequest = axios.create(
  {
    withCredentials: true,
    responseEncoding: 'utf8',
    headers: {}
  }
)

class Api {
  get = (url, ControlledComponent, params) => {
    return this.request({url, method: 'get'}, ControlledComponent, params)
  }

  post = (url, data, ControlledComponent, params) => {

    return this.request(
      {
        url,
        data,
        method: 'post'
      },
      ControlledComponent,
      params
    )
  }
  request = (config, ControlledComponent, params) => {
    const {
      progress_prop_name = 'is_in_progress'
    } = params
    config.url = API_URL + config.url

    return new Promise((resolve, reject) => {
      httpRequest(
        {
          ...config,
          ...params
        }
      )
        .then((response) => {

          ControlledComponent.setState(
            (state) => {
              const new_state = {
                ...state,
                ...response.data
              }
              localforage.setItem(ControlledComponent.constructor.name, new_state)
              return new_state
            }
          )
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
        .finally(() => {
          ControlledComponent.setState(
            (state) => {
              return {
                ...state,
                [progress_prop_name]: false
              }
            }
          )

        })
    })
  }
}

export default new Api()
