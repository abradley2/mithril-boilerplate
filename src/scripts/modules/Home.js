var DemoModel = require('../models/DemoModel.js')

function Controller () {

    this.model = DemoModel.fetch()
    
    this.save = function (e) {
        
        this.model().message( e.target.value )

        DemoModel.save( this.model() )
        
    }
}

function View (ctrl, args) {

    return m('div', [
        m('h5', ctrl.model().message() ),
        m('input', {
            value: ctrl.model().message(),
            onchange: ctrl.save.bind(ctrl)
        })
    ])

}

module.exports = {
    controller: Controller,
    view: View
}