
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
 return gulp.src([ 'dist' ], { read: false })
   .pipe(rimraf({ force: true }));
});

gulp.task('html', function () {
  return gulp.src('src/server/templates/*.handlebars')
    .pipe(gulp.dest('dist/server/templates'));
});

gulp.task('babel', function (options, a, b) {
  return gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  runSequence('clean', [ 'html', 'babel' ]);
});
