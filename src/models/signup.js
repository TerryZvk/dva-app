import { getSignup } from '../services/app'
export default {
  namespace: 'signup',
  state: {

  },
  reducers: {
  
  },
  subscriptions: {
    setup({dispatch, history}){
    
    }
  },
  effects: {
    * signup ( {payload = {}, resolve}, { call, put }){
      const { data }  = yield call(getSignup, payload)
      if(data.message === 'success' && data.code === 200){
        resolve()
      }
    }
  }
}