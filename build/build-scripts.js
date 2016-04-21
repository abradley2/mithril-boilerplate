var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename')

function buildScripts () {

    var files = ['./src/main.js']


    files.forEach(function (entry) {

        var b = browserify({
            entries: [entry],
            cache: {},
            packageCache: {},
            plugin: []
        })

        bundle(b, entry)
    })

    function bundle (b, entry) {

        b.bundle()
            .on('error', function (err) {
                console.log(err.toString());
                this.emit('end');
            })
            .pipe(source(
                entry.match(/\w+\.js$/ig)[0]
            ))
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('./public/dist'))

    }

}

module.exports = buildScripts