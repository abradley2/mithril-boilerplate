var fs = require('fs'),
	co = require('co'),
	koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    mongoose = require('mongoose'),
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
    this.response.body = yield getFile('public/index.html')
})

site.get('/:module', function* () {
    this.response.type = 'text/html'
    this.response.body = yield getFile('public/index.html')
})

site.get('/:module/:view/:id', function* () {
    this.response.type = 'text/html'
    this.response.body = yield getFile('public/index.html')
})

app.use( site.routes() )


/*
	initialize the application
*/
co(function* () {

	var localConfigJSON = yield getFile('local.json')
	
	var localConfig = JSON.parse( localConfigJSON )

	mongoose.connect( localConfig.mongoURI )

	app.listen( localConfig.port )

	console.log('MithrilApp puts on its robe and wizard hat.\nPort: ', localConfig.port)

}).catch(function (err) {
	console.error(
		"Error initializing application. Check that the local.json file is properly configured"
	)
	console.log(err)
})


function getFile (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(__dirname + '/' + path, function (err, data) {
			if (err) reject(err)
			else resolve(data)
		})
	})
}



