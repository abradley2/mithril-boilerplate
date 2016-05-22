var Router = require('koa-router'),
    api = new Router()

api.use('/api/lists', require('./lists').routes() )

module.exports = api