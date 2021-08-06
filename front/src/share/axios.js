import axios from 'axios'
import env from '../config/env'

class ApiClient {
  AXIOS = axios
  ENV = env

  get = async (url, { headers = {}, params = {} } = {}) => {
    return await this.#fetchData({ url, headers, params, method: 'get' })
  }

  post = async (url, { data = {}, headers = {}, params = {} } = {}) => {
    return await this.#fetchData({ url, data, headers, params, method: 'post' })
  }

  put = async (url, { data = {}, headers = {}, params = {} } = {}) => {
    return await this.#fetchData({ url, data, headers, params, method: 'put' })
  }

  delete = async (url, { data = {}, headers = {}, params = {} } = {}) => {
    return await this.#fetchData({ url, data, headers, params, method: 'delete' })
  }

  #configs = ({ headers = {}, params = {} } = {}) => {
    const configs = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      params: {}
    }
    const CLIENT_TOKEN = this.ENV.CLIENT_TOKEN
    if (CLIENT_TOKEN) { configs.headers['client-token'] = CLIENT_TOKEN }
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN) { configs.headers.Authorization = `Bearer ${ACCESS_TOKEN}` }

    for (const i in headers) {
      configs.headers[i] = headers[i]
    }

    for (const i in params) {
      configs.params[i] = params[i]
    }
    const BASE_URL = {
      development: this.ENV.BASE_URL,
      production: this.ENV.BASE_URL
    }

    this.AXIOS.defaults.baseURL = BASE_URL[this.ENV.NODE_ENV || 'development']

    return configs
  }

  #nextError = (err) => {
    const error = new Error()
    error.message = err?.message
    error.response = err?.response

    return error
  }

  #fetchData = async ({ url, headers, params, data = {}, method }) => {
    try {
      const configs = this.#configs({ headers, params })

      switch (method) {
        case 'get' : {
          const { data: result } = await this.AXIOS.get(url, configs)
          return result
        }
        case 'post' : {
          const { data: result } = await this.AXIOS.post(url, data, configs)
          return result
        }
        case 'put' : {
          const { data: result } = await this.AXIOS.put(url, data, configs)
          return result
        }
        case 'delete' : {
          const { data: result } = await this.AXIOS.delete(url, configs)
          return result
        }
        default : {
          throw new Error(`unknow this [${method}] method `)
        }
      }
    } catch (err) {
      throw this.#nextError(err)
    }
  }
}
const API = new ApiClient()

export { API }
