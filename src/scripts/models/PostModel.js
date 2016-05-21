var PostModel = {

    get: function (id) {
        return m.request({
            dataType: 'application/json',
            method: 'GET',
            url: 'api/post/' + id
        })
    },

    getLatest: function () {
        return m.request({
            dataType: 'application/json',
            method: 'GET',
            url: 'api/post/latest'
        })
    },

    save: function (post) {
        return m.request({
            dataType: 'application/json',
            method: 'POST',
            url: 'api/post'
        })
    }

}

module.exports = PostModel