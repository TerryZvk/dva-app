import axios from 'axios'
import { message } from 'antd';

const request = axios.create()
request.defaults.withCredentials = true
request.defaults.timeout = 10000


// 响应拦截器
request.interceptors.response.use((data) => {
  return data
}, (err) => {
  const { response: { status } } = err
  if (status === 401) {
    // return Promise.reject(new Error('邮箱或密码不对！'))
    console.log(err)
    message.error('邮箱或密码不对！')
    window.location.href = '/signup'
  }
  return Promise.reject(err)
})

export default request