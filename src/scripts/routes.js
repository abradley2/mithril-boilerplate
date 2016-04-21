var modules = {
    Home: require('./modules/Home')
}

m.route.mode = 'pathname'

m.route(document.querySelector('body'), '/', {

    '/': Home

})
