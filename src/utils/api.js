import { API_PREFIX } from './config.js'
module.exports = {
  // get /topics 主题首页
  // 接收 get 参数
  // page Number 页数
  //per_page 每页topic数
  getTopicList: `${API_PREFIX}/user/1/microposts.json`,
  loginPath: `${API_PREFIX}/sessions`
}