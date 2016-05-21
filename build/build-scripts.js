var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename')

function buildScripts () {

    var files = ['./src/scripts/main.js']

    files.forEach(function (entry) {

        var name = entry.match(/\w+.\w+$/ig)[0],
            b = browserify({
            entries: [entry],
            cache: {},
            packageCache: {},
            plugin: []
        })

        bundle(b, entry)
    })

    function bundle (b, name) {

        b.bundle()
            .on('error', function (err) {
                console.log(err.toString())
                this.emit('end')
            })
            .pipe(source(name))
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('./public/dist'))

    }

}

module.exports = buildScripts