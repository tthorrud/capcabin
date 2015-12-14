var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var src = {};
var path = require('path');

var DEST = 'build';
 
gulp.task('build', function () {
  browserify({
    entries: 'src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(DEST));
});

// HTML pages
gulp.task('pages', function () {
    src.pages = 'src/pages/*.html';
    return gulp.src(src.pages)
      .pipe(gulp.dest(DEST))     
});

// Launch a lightweight HTTP Server
gulp.task('serve', function (cb) {

    watch = true;

    runSequence('build', function () {
        browserSync({
            notify: false,
            // Customize the BrowserSync console logging prefix
            logPrefix: 'RSK',
            // Run as an https by uncommenting 'https: true'
            // Note: this uses an unsigned certificate which on first access
            //       will present a certificate warning in the browser.
            https: true,
            port: 44302,
            server: DEST
        });

        gulp.watch(src.images, ['images']);
        gulp.watch(src.pages, ['pages']);
        gulp.watch(src.styles, ['styles']);
        gulp.watch(src.components, ['components']);
        gulp.watch(DEST + '/**/*.*', function (file) {
            browserSync.reload(path.relative(__dirname, file.path));
        });
        cb();
    });
});

// Images
gulp.task('images', function () {
    src.images = 'src/images/**';
    return gulp.src(src.images)
      .pipe(gulp.dest(DEST + '/images'))
});

//plain css
gulp.task('move-css', function () {
    return gulp.src([
            'src/styles/capcabin.css', 'src/styles/bootstrapTheme.css', 'node_modules/bootstrap/dist/css/**'
    ])
        .pipe(gulp.dest(DEST + '/css'));
});

//move bootstrap js and fonts
gulp.task('move-fonts', function () {
    return gulp.src([
            'node_modules/bootstrap/dist/fonts/**'
    ])
        .pipe(gulp.dest(DEST + '/fonts'));
});

gulp.task('move-js', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/js/**', 'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(gulp.dest(DEST + '/js'));
})

 
gulp.task('default', ['build', 'pages', 'images', 'move-css', 'move-fonts', 'move-js', 'serve']);