var Router = require('koa-router'),
    post = new Router()

post.get('/', function* () {

    this.response.type = 'application/json'
    this.response.body = JSON.stringify({
    	message: "Hello World!"
    })

})

module.exports = post