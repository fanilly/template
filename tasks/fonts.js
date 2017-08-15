/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:31:20
 * @Description: Description
 */
import gulp from 'gulp';
import flatten from 'gulp-flatten';

gulp.task('_fonts', () => {
  return gulp.src('library/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('fonts', ['_fonts'], () => {
  return gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'))
});
