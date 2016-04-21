var HomeModel = require('../models/HomeModel.js')

function HomeController () {
    this.model = new HomeModel()
}

function HomeView () {
    return m('div.container', [
        
    ])
}