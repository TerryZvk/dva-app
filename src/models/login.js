import { login } from '../services/app'
import { routerRudux } from 'dva/router' 
export default {
  namespace: 'login',
  state: {

  },
  reducers: {
  
  },
  subscriptions: {
    setup({dispatch, history}){
    
    }
  },
  effects: {
    * login ( {payload = {}, resolve}, { call, put }){
      const { data }  = yield call(login, payload)
      if(data.message === 'success'){
        resolve()
      }
    }
  }
}