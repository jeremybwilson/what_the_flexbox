let gulp = require('gulp');
let sass = require('gulp-sass');
let postcss = require('gulp-postcss');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() { 
  return gulp.src('css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass())
    .pipe(gulp.dest('build'))
    // cb(); // callback function needed with Gulp 4
});

gulp.task('watch', function(){
  gulp.watch('css/styles.css', gulp.series('styles'));
});