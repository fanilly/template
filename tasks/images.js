/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:29:13
 * @Description: Description
 */
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('images', () => {
  return gulp.src('./src/images/**/*.{jpg,png,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
})
