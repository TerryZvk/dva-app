const env = 'prod'

const target = { dev: 'http://localhost:3000', prod: 'https://terryzvk-rails-api.herokuapp.com' }

export default {
  '/api/v1/': {
    target: target[env],
    changeOrigin: true
  }
}