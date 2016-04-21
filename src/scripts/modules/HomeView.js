var NavbarView = require('./NavbarView')

module.exports = function(ctrl, args){

    return [
        NavbarView,
        m('h3', 'this is the home view'),
        m('a', {href: '/about', config: m.route}, 'about'),
        m('h5', ctrl.model.message() ),
        m('input', {
            type: 'text',
            value: ctrl.model.message(),
            onchange: m.withAttr('value', ctrl.model.message)
        })
    ]

}
