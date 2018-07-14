import axios from 'axios'
import localforage from 'localforage'
import { API_URL } from 'constants/API'
import { forEach } from 'lodash'

const httpRequest = axios.create(
  {
    withCredentials: true,
    responseEncoding: 'utf8',
    headers: {},
    baseURL: API_URL
  }
)

class Api {
  delete = (url, ControlledComponent, params) => {
    const config = {
      url,
      method: 'delete'
    }
    return this.request(config, ControlledComponent, params)
  }
  generateFormData = (raw_data) => {
    const data = new FormData()

    forEach(raw_data, (value, key) => {
      data.append(key, value)
    })
    return data
  }
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
  put = (url, raw_data = [], ControlledComponent, params) => {

    const data = this.generateFormData(raw_data),
      config = {
        url,
        data,
        headers: {'content-type': 'multipart/form-data'},
        method: 'post',
        onUploadProgress: function (progressEvent) {
          let upload_progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          ControlledComponent.setState(
            (state) => {
              return {
                ...state,
                upload_progress
              }
            }
          )
        }
      }

    return this.request(config, ControlledComponent, params)
  }
  request = (config, ControlledComponent, params = {}) => {
    const {
      progress_prop_name = 'is_in_progress'
    } = params

    ControlledComponent.setState(
      (state) => {
        return {
          ...state,
          [progress_prop_name]: true

        }
      }
    )

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
