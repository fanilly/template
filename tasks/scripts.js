/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-11 11:42:20
 * @Description: Description
 */
import gulp from 'gulp';
import babel from 'gulp-babel';
import jsmin from 'gulp-uglify';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';

/**
 * javascript 代码的编译与压缩
 */
gulp.task('scripts', () => {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(jsmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/scripts'));
});
