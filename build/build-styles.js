var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename')

function buildStyles () {

  return gulp.src('./src/styles/main.styl')
    .pipe(stylus().on('error', gutil.log))
    .pipe(rename({
        extname: '.bundle.css'
    }))
    .pipe(gulp.dest('./public/dist'))
    
}

module.exports = buildStyles;
