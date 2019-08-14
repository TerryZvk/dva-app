import { getTopicsList } from '../services/topics'

export default {
  namespace: 'topics',
  state: {
    topicsList: {
      list: [],
      total: 0,
      params: {
        pageNum: 1,
        pageSize: 10
      }
    },
    topicDetail: {}
  },
  reducers: {
    setData (state, { payload }){
      return { ...state, ...payload }
    },
    setTopicsList (state, { payload }) {
      const topicsList = { ...state.topicsList, ...payload }
      return { ...state, topicsList }
    },
  },
  subscriptions: {
    setup({dispatch, history}){
      dispatch({
        type: 'queryTopics',
        payload: {
          per_page: '10',
          page: 1
        }
      })
    }
  },
  effects: {
    * queryTopics ( {payload = {}}, { call, put }){
      const { data }  = yield call(getTopicsList, payload)
      if(data.message === 'success'){
        yield put({
          type: 'setData', 
          payload: { 
            topicsList: {
              list: data.data.microposts, 
              total: data.data.paginate_meta.total_count,
              params: {
                pageNum: data.data.paginate_meta.current_page,
                pageSize: 10,
              }
            } 
          }
        })
      }
    }
  }
}