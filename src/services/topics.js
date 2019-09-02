import axios from 'axios'
import { getTopicList } from '../utils/api'

export async function getTopicsList(params) {
  return axios({
    method: 'get',
    url: `${getTopicList}?per_page=${params.per_page}&page=${params.page}`
  })
}


