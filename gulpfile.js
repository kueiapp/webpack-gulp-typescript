let gulp = require('gulp');

/** tasks */
gulp.task('hello', function() {
  console.log("hello gulp ~!")
});

// compress js files
var uglify = require('gulp-uglify');
gulp.task('compressjs', () => {
    return gulp.src('./dist/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// bundle js for browser
let browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('browserify', () => {
    return browserify({
        entries: ['./dist/tsc/main.js']
        })
        .bundle()
        .pipe(source('main.browserify.js'))
        .pipe(gulp.dest('./dist/browser'));
});

// 壓縮html
let htmlmin = require('gulp-htmlmin');
gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(
    	htmlmin({collapseWhitespace: true})
    )
    .pipe(
    	gulp.dest('dist')
    );
});


// Static server
let browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// compress css files
let cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
// gulp.task('run-all',["hello","minify"]);