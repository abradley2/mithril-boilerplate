window.m = require('mithril')

m.route.mode = 'pathname'

var modules = {
    Client: require('./modules/Client'),
    Designer: require('./modules/Designer'),
    Admin: require('./modules/Admin')
}

document.addEventListener('DOMContentLoaded', function () {

    m.route(document.querySelector('body'), '/', {

        '/': modules.Client,

        '/client/:view/:id': modules.Client,

        '/designer': modules.Designer,

        '/admin': modules.Admin

    })

})