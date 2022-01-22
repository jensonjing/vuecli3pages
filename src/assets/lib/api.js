import axios from 'axios';
import { utility } from './common'

const ajax = (options) => {
  return new Promise((res, rej) => {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    })
    // request 拦截器
    instance.interceptors.request.use(
      config => {
        const token = sessionStorage.getItem('token')
        if(token){
          config.headers.Authorization = "Bearer " + token
        }
        if (config.method.toLocaleLowerCase() === 'get') {
          if (config.data) {
            config.url += utility.splitObj(config.data)
          }
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }
        // 根据返回的code值来做不同的处理（和后端约定）
        switch (data.code) {
          case '401':
            break;
          default:
        }
        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = 'Token校验失败'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        } 
        console.error(err)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    //请求处理
    instance(options).then((res) => {
      resolve(res)
      return false
    }).catch((error) => {
      reject(error)
    })
  })
}

export default ajax