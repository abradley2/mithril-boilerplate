var mongoose = require('mongoose')
	Schema = mongoose.Schema

var ListModel = mongoose.model('viewConfig',

	new Schema({
		name: {
			type: String,
			default: 'New List'
		}
	})

)

module.exports = ListModel