/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:47:46
 * @Description: Description
 */

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
const browsersync = require('browser-sync').create();

gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(plumber())
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream());
})
