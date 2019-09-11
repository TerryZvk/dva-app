import request from '../utils/request'
import { getTopicList } from '../utils/api'

export async function getTopicsList(params) {
  return request({
    method: 'get',
    url: `${getTopicList}?per_page=${params.per_page}&page=${params.page}`
  })
}


