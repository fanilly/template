/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:18:53
 * @Description: Description
 */
import gulp from 'gulp';
import flatten from 'gulp-flatten';

gulp.task('library', () => {
  return gulp.src('./library/**/*.{min.js,min.css}')
    .pipe(flatten())
    .pipe(gulp.dest('./src/librarys'))
    .pipe(gulp.dest('./dist/librarys'))
});
