import { src, dest, lastRun, watch, series, parallel } from 'gulp';

import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

import panini from 'panini';
import fileInclude from 'gulp-file-include';
import urlPrefixer from 'gulp-url-prefixer';
import htmlmin from 'gulp-htmlmin';

import yargs from 'yargs';
import gulpif from 'gulp-if';

import del from 'del';
import rename from 'gulp-rename';
import named from 'vinyl-named';

import sass from 'gulp-sass';
import cssMin from 'gulp-csso';
import mergeMQ from 'gulp-merge-media-queries';
import beautify from 'gulp-jsbeautifier';
import sourcemaps from 'gulp-sourcemaps';

import imagemin from 'gulp-imagemin';

import postcss from 'gulp-postcss';
import purgecss from 'gulp-purgecss';
import autoprefixer from 'autoprefixer';

import webpack from 'webpack-stream';

import browserSync from 'browser-sync';
import bssi from 'browsersync-ssi';

import tailwindcss from 'tailwindcss';

const bootstrap = [];
const tailwind = [tailwindcss];
const FRAMEWORK = tailwind;

const PRODUCTION = yargs.argv.prod;
const SERVER = browserSync.create();

// Server
export const livePreviewSync = (done) => {
  SERVER.init({
    // proxy: 'localhost/lfb/src/',
    server: {
      baseDir: '../src/',
      middleware: bssi({ baseDir: '../src/', ext: '.html' }),
    },
    tunnel: 'lorenzecode',
    notify: false,
    online: true,
  });
  done();
};
export const reload = (done) => {
  SERVER.reload();
  done();
};

// Notify
const errorHandler = (r) => {
  notify.onError('\n\n❌  ===> ERROR: <%= error.message %>\n')(r);
};

// Html
export const html = () => {
  panini.refresh();
  return (
    src(['../src/pages/*.html'])
      .pipe(plumber(errorHandler))
      .pipe(
        panini({
          root: '../src/pages/',
          layouts: '../src/pages/layouts/',
          partials: '../src/pages/partials/',
          helpers: '../src/pages/helpers/',
          data: '../src/pages/data/',
        })
      )
      .pipe(fileInclude({ prefix: '@@' }))
      // .pipe(
      //   gulpif(
      //     PRODUCTION,
      //     urlPrefixer.html({
      //       prefix: 'http://localhost:3000/',
      //     })
      //   )
      // )
      .pipe(gulpif(PRODUCTION, htmlmin({ collapseWhitespace: true })))
      .pipe(dest('../src'))
      .pipe(SERVER.stream())
      .pipe(
        notify({
          message: '\n\n✅  ===> HTML — completed!\n',
          onLast: true,
        })
      )
  );
};

// Styles
export const styles = () => {
  return src('../src/assets/sass/*.scss')
    .pipe(plumber(errorHandler))
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('../src/assets/sass/generator'))
    .pipe(postcss(FRAMEWORK, PRODUCTION ? [autoprefixer] : []))
    .pipe(mergeMQ({ log: true }))
    .pipe(
      gulpif(
        PRODUCTION,
        purgecss({
          content: ['../src/**/*.{html,js}'],
          defaultExtractor: (content) => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
            const innerMatches =
              content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
            return broadMatches.concat(innerMatches);
          },
        })
      )
    )
    .pipe(cssMin())
    .pipe(gulpif(!PRODUCTION, beautify()))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('../src/assets/css'))
    .pipe(SERVER.stream())
    .pipe(
      notify({
        message: '\n\n✅  ===> STYLES — completed!\n',
        onLast: true,
      })
    );
};

// export const core = () => {
//   return src(['../src/assets/sass/core.scss'])
//     .pipe(plumber(errorHandler))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(dest('../src/assets/sass/generator'))
//     .pipe(postcss(FRAMEWORK))
//     .pipe(cssMin())
//     .pipe(beautify())
//     .pipe(dest('../src/assets/css'))
//     .pipe(SERVER.stream())
//     .pipe(
//       notify({
//         message: '\n\n✅  ===> CORE — completed!\n',
//         onLast: true,
//       })
//     );
// };

// export const styles = () => {
//   return (
//     src(
//       !PRODUCTION
//         ? '../src/assets/sass/style.scss'
//         : ['../src/assets/sass/core.scss', '../src/assets/sass/style.scss']
//     )
//       // src(['../src/assets/sass/core.scss', '../src/assets/sass/style.scss'])
//       .pipe(plumber(errorHandler))
//       .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
//       .pipe(sass().on('error', sass.logError))
//       .pipe(postcss(FRAMEWORK, PRODUCTION ? [autoprefixer] : []))
//       .pipe(mergeMQ({ log: true }))
//       .pipe(
//         gulpif(
//           PRODUCTION,
//           purgecss({
//             content: ['../src/**/*.{html,js}'],
//             defaultExtractor: (content) => {
//               const broadMatches =
//                 content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//               const innerMatches =
//                 content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
//               return broadMatches.concat(innerMatches);
//             },
//           })
//         )
//       )
//       .pipe(cssMin())
//       // .pipe(gulpif(!PRODUCTION, beautify()))
//       .pipe(beautify())
//       .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
//       .pipe(dest('../src/assets/css'))
//       .pipe(SERVER.stream())
//       .pipe(
//         notify({
//           message: '\n\n✅  ===> STYLES — completed!\n',
//           onLast: true,
//         })
//       )
//   );
// };

// Scripts
export const scripts = () => {
  return (
    // src(['../src/assets/js/**/*.js', '!../src/assets/js/*.min.js'])
    src('../src/assets/js/pages/*.js')
      .pipe(plumber(errorHandler))
      .pipe(named())
      .pipe(
        webpack({
          module: {
            rules: [
              {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env'],
                },
              },
            ],
          },
          mode: PRODUCTION ? 'production' : 'development',
          devtool: !PRODUCTION ? 'inline-source-map' : false,
          output: {
            filename: '[name].js',
          },
        })
      )
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('../src/assets/js'))
      .pipe(SERVER.stream())
      .pipe(
        notify({
          message: '\n\n✅  ===> JS — completed!\n',
          onLast: true,
        })
      )
  );
};

// Images
export const images = () => {
  return src('../src/assets/img/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(imagemin())
    .pipe(dest('../public/assets/img'))
    .pipe(
      notify({
        message: '\n\n✅  ===> IMAGES — completed!\n',
        onLast: true,
      })
    );
};

// Copy
export const copy = () => {
  return src([
    '../src/**/*',
    '!../src/assets/{img,sass}',
    '!../src/assets/{img,sass}/**/*',
    '!../src/assets/js/{functions,lib,pages}',
    '!../src/assets/js/{functions,lib,pages}/**/*',
    '!../src/pages',
    '!../src/pages/**/*',
  ]).pipe(dest('../public'));
};

// Del
export const clean = () => del(['../public'], { force: true });

// Watch
export const watchForChanges = () => {
  watch('../src/pages/**/**/*', series(html, styles));
  watch(['../src/assets/sass/**/*.scss'], series(styles));
  watch(
    ['../src/assets/js/**/*.js', '!../src/assets/js/**/*.min.js'],
    series(scripts)
  );
};

// Tasks
export const start = series(
  styles,
  scripts,
  html,
  livePreviewSync,
  watchForChanges
);
export const dev = series(
  styles,
  scripts,
  html,
  livePreviewSync,
  watchForChanges
);
export const build = series(clean, styles, scripts, html, copy, images);
export default dev;
