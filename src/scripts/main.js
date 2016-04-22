window.m = require('mithril')
window._ = require('lodash')

m.startComputation = _.wrap(m.startComputation, function (func) {
    console.log('startComputation')
    func()
})

m.endComputation = _.wrap(m.endComputation, function (func) {
    console.log('endComputation')
    func()
})

m.render = _.wrap(m.render, function (func) {
    var args = Array.prototype.slice.call(arguments, 1)
    console.log('render')
    func.apply(m, args)
})

m.route.mode = 'pathname'

var modules = {
    Home: require('./modules/Home')
}

document.addEventListener('DOMContentLoaded', function () {

    m.route(document.querySelector('body'), '/', {

        '/': modules.Home

    })

})