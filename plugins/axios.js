import Axios from 'axios'

const instance = Axios.create({
  baseURL: '192.168.12.2',
  timeout: 40000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
