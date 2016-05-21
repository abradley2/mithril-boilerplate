
function Controller () {

	this.model = m.request({
        method: 'GET',
        url: '/api/post'
    })

}

function View (ctrl, args) {

    return m('div', [
        m('h3', ctrl.model().message)
    ])

}

module.exports = {
    controller: Controller,
    view: View
}