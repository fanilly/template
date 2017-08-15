/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-14 10:19:09
 * @Description: Description
 */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import cssmin from 'gulp-minify-css';
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
    .pipe(cssmin({
      advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
      compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
      keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
      keepSpecialComments: '*'
      //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browsersync.stream());
});
