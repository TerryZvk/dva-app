import { getTopicsList } from '../services/topics'

export default {
  namespace: 'topics',
  state: {
    topicsList: []
  },
  reducers: {
    setData (state, { payload }){
      return { ...state, ...payload }
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      dispatch({
        type: 'queryTopics',
        payload: {
          tab: 'all',
          page: 1
        }
      })
    }
  },
  effects: {
    * queryTopics ( {payload = {}}, {call, put}){
      const { data } = yield call(getTopicsList, payload)
      if(data.success){
        yield put({type: 'setData', payload: { topicsList: data.data }})
      }
    }
  }

}