window.m = require('mithril')

m.route.mode = 'pathname'

var modules = {
    Home: require('./modules/Home')
}

document.addEventListener('DOMContentLoaded', function () {

    m.route(document.querySelector('body'), '/', {

        '/': modules.Home

    })

})