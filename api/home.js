var Router = require('koa-router'),
    home = new Router(),
    db = require('./db')

home.get('/', function* () {

    this.response.type = 'application/json'
    this.response.body = JSON.stringify( db.home )

})

home.put('/', function* () {

    db.home = this.request.body

    this.response.type = 'application/json'
    this.response.body = JSON.stringify( db.home )

})

module.exports = home