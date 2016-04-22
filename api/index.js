var Router = require('koa-router'),
    api = new Router()

api.use('/api/home', require('./home').routes() )

module.exports = api