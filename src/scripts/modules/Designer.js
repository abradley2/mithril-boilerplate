function DesignerController () {

}

function DesignerView (ctrl, args) {

    return m('div', [
        m('h3', 'Designer')
    ])

}

module.exports = {
    controller: DesignerController,
    view: DesignerView
}