var PostModel = require('../models/PostModel.js')

function Controller (id) {

    this.model = PostModel.get(id)
    
}

function View (ctrl, args) {

    return m('div', [
        m('h5', ctrl.model().title )
    ])

}

module.exports = {
    controller: Controller,
    view: View
}