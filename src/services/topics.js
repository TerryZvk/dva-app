import request from '../utils/request'
import { getTopicList, getTopicPath } from '../utils/api'

export async function getTopicsList(params) {
  return request(`${getTopicList}?tab=${params.tab}&page=${params.page}`, {
    method: 'GET'
  })
}

export async function getTopic(params) {
  return request(`${getTopicPath}/${params.id}`, {
    method: 'GET'
  })
}

