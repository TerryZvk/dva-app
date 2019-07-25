import { API_PREFIX } from './config.js'
module.exports = {
  // get /topics 主题首页
  // 接收 get 参数
  // page Number 页数
  // tab String 主题分类。目前有 ask share job good
  // limit Number 每一页的主题数量
  // mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文
  getTopics: `${API_PREFIX}/topics`
}