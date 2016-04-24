var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    gutil = require('gulp-util');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('sass', function () {
  return gulp.src('app/style/style.scss')
      .pipe(sass())
      .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
      .pipe(csso())
      .on('error', gutil.log)
      .pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function () {
  gulp.watch('app/style/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
