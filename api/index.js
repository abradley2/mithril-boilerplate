var Router = require('koa-router'),
    api = new Router()

api.use('/api/post', require('./post').routes() )

module.exports = api