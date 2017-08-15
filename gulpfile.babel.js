/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-11 08:41:01
 * @Description: Description
 */

import gulp from 'gulp';
const browsersync = require('browser-sync').create();
const reload = browsersync.reload;

import scripts from './tasks/scripts.js';
import library from './tasks/librarys.js';
import styles from './tasks/styles.js';
import images from './tasks/images.js';
import fonts from './tasks/fonts.js';
import html from './tasks/html.js';

gulp.task('serve', ['scripts',
  'library', 'styles', 'images', 'fonts', 'html'
], () => {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    }
  });

  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/styles/**/*.less', ['styles']);
  gulp.watch('./src/scripts/**/*.js', ['scripts']);
  gulp.watch('./src/*.html').on('change',reload);
  gulp.watch('./src/styles/**/*.less').on('change',reload);
})
