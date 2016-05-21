// you can make a mock json-db here for quick prototyping

module.exports = {

    Post: [
        {
            id: 1,
            title: 'first post',
            description: 'first post description',
            tags: ['tag one', 'tag two'],
            createdAt: new Date(),
            updatedAt: new Date(),
            PostContent: 1
        }
    ],

    PostContent: [
        {
            id: 1,
            intro: 'intro of the first post',
            body: 'body of the first post'
        }
    ],

    Asset: [
        {
            id: 1,
            type: 'image',
            name: 'my_asset.png'
        }
    ]

}