var Model = require('./models/HomeModel.js')

function Controller () {

    this.model = new Model()
    
}

function View (ctrl, args) {

    return [
        m('h5', ctrl.model.message() )
    ]

}

module.exports = {
    controller: Controller,
    view: View
}