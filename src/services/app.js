import request from '../utils/request'
import { loginPath, signupPath } from '../utils/api'

export async function login(params) {
  return request({
    method: 'post',
    url: `${loginPath}`,
    data: { user: params }
  })
}

export async function getSignup(params) {
  return request({
    method: 'post',
    url: `${signupPath}`,
    data: { user: params }
  })
}
