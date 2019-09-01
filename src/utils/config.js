module.exports = {
  API_PREFIX: process.env.NODE_ENV === 'develop' ? 'https://terryzvk-rails-api.herokuapp.com/api/v1' : 'http://localhost:3000/api/v1',
  openPages: ['/login']
}