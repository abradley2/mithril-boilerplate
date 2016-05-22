var views = {

	views: m.prop([]),

	actions {

		get: function () {
			return m.request({
				method: 'GET',
				url: '/api/views'
			}).then( this.views )
		},

		add: function (data) {
			return m.request({
				method: 'POST',
				url: '/api/views',
				data: data
			}).then( (function (res) {
				this.views( this.views().push(res) )
			}).bind(this) )
		},

		remove: function () {
			return m.request({
				method: 'DELETE',
				url: '/api/views/' + data.id
			})
		},

		edit: function (data) {
			return m.request({
				method: 'PUT',
				url: '/api/views/' + data.id,
				data: data
			})
		}
		
	}

}

module.exports = views