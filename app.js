var koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    api = require('./api')
    app = koa()

app.use( serve(__dirname + '/public') )

app.use( bodyParser() )

app.use( api.routes() )

app.listen(1337)
