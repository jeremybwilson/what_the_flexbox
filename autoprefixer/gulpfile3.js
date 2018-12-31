const gulp = require('gulp');
const sass = require('gulp-sass');  // Requires the gulp-sass plugin
const autoprefixer = require('gulp-autoprefixer');


exports.default = function() {
  return src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
}

