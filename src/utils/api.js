import { API_PREFIX } from './config.js'
module.exports = {
  getTopicList: `${API_PREFIX}/user/1/microposts.json`,
  loginPath: `${API_PREFIX}/sessions.json`,
  signupPath: `${API_PREFIX}/users.json`,
}