
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
 return gulp.src([ 'dist' ], { read: false })
   .pipe(rimraf({ force: true }));
});

gulp.task('clean-test', function() {
 return gulp.src([ 'output' ], { read: false })
   .pipe(rimraf({ force: true }));
});

gulp.task('babel', function (options, a, b) {
  return gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  runSequence('clean', 'babel');
});
