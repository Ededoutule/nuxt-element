// import Axios from 'axios'

// const instance = Axios.create({
//   baseURL: '192.168.12.2',
//   timeout: 40000,
//   headers: { 'X-Requested-With': 'XMLHttpRequest' },
// })

// instance.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

// plugin 函数参数
// plugin 一般向外暴露一个函数，该函数接收两个参数分别是 context 和 inject

// context： 上下文对象，该对象存储很多有用的属性。比如常用的 app 属性，包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取。

// inject： 该方法可以将 plugin 同时注入到 context， Vue 实例， Vuex 中。
// 系统会默认将 $ 作为方法名的前缀。

export default function ({ $axios }) {
  $axios.defaults.baseUrl = process.env.baseUrl
  $axios.defaults.timeout = 40000
  $axios.interceptors.request.use(
    (request) => {
      return request.data
    },
    (err) => {
      return Promise.reject(err)
    }
  )
  $axios.interceptors.response.use(
    (response) => {
      return response.data
    },
    (err) => {
      return Promise.reject(err)
    }
  )
}
