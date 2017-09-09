/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:19:09
 * @Description: Description
 */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
const browsersync = require('browser-sync').create();


gulp.task('styles', () => {
  return gulp.src('./src/styles/!(_)*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browsersync.stream());
});
