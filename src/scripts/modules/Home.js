var DemoModel = require('../models/DemoModel.js')

function Controller () {

    this.model = DemoModel.fetch()
    
    this.save = function (e) {
        
        this.model().message( e.target.value )

        DemoModel.save( this.model() )
        
    }


    setTimeout(_.bind(function () {

        this.model().message('will this cause computation to start?')

        console.log( this.model().message() )

    }, this), 5000)

    setTimeout(_.bind(function () {

        console.log( 'trigger computation manually!' )

        m.startComputation()
        m.endComputation()

    }, this), 10000)

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