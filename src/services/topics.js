import request from '../utils/request'
import { getTopics } from '../utils/api'

export async function getTopicsList(params) {
  return request(`${getTopics}?tab=${params.tab}&page=${params.page}`, {
    method: 'GET'
  })
}
