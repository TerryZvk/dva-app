import request from '../utils/request'
import { getTopics } from '../utils/api'

export async function getTopicsList() {
  return request(`${getTopics}?limit=10`, {
    method: 'GET'
  })
}
