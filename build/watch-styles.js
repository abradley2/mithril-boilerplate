var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename')


function watchStyles () {
  return gulp.src('./src/styles/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(rename({
        extname: '.bundle.css'
    }))
    .pipe(gulp.dest('./public/dist'))
}

module.exports = watchStyles;
