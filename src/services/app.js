import axios from 'axios'
import { loginPath } from '../utils/api'

export async function login(params) {
  return axios({
    method: 'post',
    url: `${loginPath}`,
    data: { user: params }
  })
}