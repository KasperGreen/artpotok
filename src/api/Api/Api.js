import axios from 'axios'
import localforage from 'localforage'
import { API_URL } from 'constants/API'

const http = axios.create(
  {
    withCredentials: true,
    responseEncoding: 'utf8',
    headers: {}
  }
)

class Api {
  get = (url, SummonerComponent, progress_prop_name) => {
    console.log(' → ', SummonerComponent, ' ← SummonerComponent | ')

    this.request({url, method: 'get'}, SummonerComponent, progress_prop_name)
  }

  post = (url, data, SummonerComponent, progress_prop_name) => {


    this.request(
      {
        url,
        data,
        method: 'post'
      },
      SummonerComponent,
      progress_prop_name
    )
  }
  request = (config, SummonerComponent, progress_prop_name = 'is_in_progress') => {


    config.url = API_URL + config.url

    console.log(' → ', config, ' ← config | ')

    http(
      config
    )
      .then((response) => {

        console.log(' → ', response.data, ' ← response.data | ')

        SummonerComponent.setState(
          (state) => {
            const new_state = {
              ...state,
              ...response.data
            }
            localforage.setItem(SummonerComponent.constructor.name, new_state)

            return new_state
          }
        )
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(() => {
        SummonerComponent.setState(
          (state) => {
            return {
              ...state,
              [progress_prop_name]: false
            }
          }
        )

      })
  }
}

export default new Api()
