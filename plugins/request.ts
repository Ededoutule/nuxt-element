export default ({ $axios }: any, inject: any) => {
  const requstList: any = {}
  const methods = ['get', 'post', 'put', 'delete']
  methods.forEach((method: any) => {
    const dataKay = method === 'get' ? 'params' : 'data'
    requstList[method] = (url: string, data: any) => {
      return $axios({ method, url, [dataKay]: data }).catch((err: any) => {
        return {
          err_no: 1,
          data: {},
          errors: [err],
        }
      })
    }
  })
  inject('request', requstList)
}
