var mongoose = require('mongoose')
	Schema = mongoose.Schema
	ObjectId = Schema.ObjectId

var ViewModel = mongoose.model('view',

	new Schema({
		name: {
			type: String,
			default: 'New List'
		},
		component: {
			type: String
			default: 'Grid'
		},
		config: {
			type: ObjectId
		}
	})

)

module.exports = ViewModel