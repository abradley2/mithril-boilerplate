var koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    Router = require('koa-router'),
    api = require('./api'),
    app = koa()

app.use( serve(__dirname + '/public') )
app.use( bodyParser() )
app.use( api.routes() )

/* 
	This is a SPA so all routes not prefixed 
	with /api/:method should return the index  
*/
var site = new Router()

site.get('/', function* () {
    this.response.type = 'text/html'
    this.response.body = yield getIndex()
})

app.use( site.routes() )

app.listen(1337)


function getIndex () {
	return new Promise(function (resolve, reject) {
		fs.readFile(__dirname + '/../public/index.html', function (err, data) {
			if (err) reject(err)
			else resolve(data)
		})
	})
}



