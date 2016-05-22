function AdminController () {

}

function AdminView (ctrl, args) {

    return m('div', [
        m('h3', 'Admin')
    ])

}

module.exports = {
    controller: AdminController,
    view: AdminView
}