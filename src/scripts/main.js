window.m = require('mithril')

m.route.mode = 'pathname'

var modules = {
    Home: require('./modules/Home')
}

m.route(document.querySelector('body'), '/', {

    '/': Home

})
