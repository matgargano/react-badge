var gulp = require('gulp');
var react = require('gulp-react');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');


gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) {
            gutil.log('Recompiling' + file);
        }
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);

});