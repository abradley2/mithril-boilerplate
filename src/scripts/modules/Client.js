function ClientController () {
	var viewType = m.route.param('view'),
		viewId = m.route.param('id')

	console.log(viewType, viewId)

}

function ClientView (ctrl, args) {
	
    return m('div', [
        m('h3', 'Client')
    ])

}

module.exports = {
    controller: ClientController,
    view: ClientView
}