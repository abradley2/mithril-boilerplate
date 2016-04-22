function DemoModel (data) {

    this.message = m.prop(data.message)
    
}

function fetch () {
    return m.request({
        method: 'GET',
        url: 'api/home',
        type: DemoModel
    })
}

function save (model) {

    return m.request({
        dataType: 'application/json',
        method: 'PUT',
        url: 'api/home',
        data: model
    })
    
}

module.exports = {
    fetch: fetch,
    save: save
}