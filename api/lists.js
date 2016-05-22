var Router = require('koa-router'),
	mongoose = require('mongoose'),
	ListModel = require('./models/ListModel.js'),
    lists = new Router()
    

// create
lists.post('/', function* () {

	var newList = new ListModel(this.request.body)

	yield newList.save( (function (err, data) {

		this.response.type = 'application/json'
		this.response.body = JSON.stringify(data)

	}).bind(this) )	

})

// read
lists.get('/', function* () {

	yield ListModel.find( (function (err, data) {

		this.response.type = 'application/json'
		this.response.body = JSON.stringify(data)

	}).bind(this) )

})

// read
lists.get('/:id', function* () {

})

// update
lists.put('/:id', function* () {

})

// delete
lists.del('/:id', function* () {

})

module.exports = lists