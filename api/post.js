var Router = require('koa-router'),
    post = new Router(),
    db = require('./db')

post.get('/', function* () {

    this.response.type = 'application/json'
    this.response.body = JSON.stringify( db.Post )

})

post.get('/latest', function* () {

    this.response.type = 'application/json'
    this.response.body = JSON.stringify( db.Post[db.Post.length-1] )

})

module.exports = post