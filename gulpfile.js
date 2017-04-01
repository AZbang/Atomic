'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const zip = require('gulp-zip');
const builder = require('gulp-nw-builder');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const isDev = process.env.DEV !== 'production';

var errorMessage = () => {
	return plumber({errorHandler: notify.onError((err) => {
		return {
			title: err.name,
			message: err.message
		}
	})})
}

gulp.task('server', () => {
	return connect.server({
		port: 1338,
		livereload: true,
		root: 'dist'
	});
});

gulp.task('js', () => {
	return gulp.src('src/js/app.js')
		.pipe(errorMessage())
		.pipe(browserify({
			debug: isDev
		}))
		.pipe(gulpIf(!isDev, babel({
			presets: ['es2015']
		})))
		.pipe(gulpIf(!isDev, uglify()))
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('images', function () {
	return gulp.src('src/img/**/*.*')
		.pipe(errorMessage())
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
		.pipe(connect.reload());
});

gulp.task('zip', function() {
	return gulp.src('dist/**/*.*')
		.pipe(zip('PolyAlarm.zip'))
		.pipe(gulp.dest('zip'))
});

gulp.task('watch', () => {
	gulp.watch('src/js/**/*.*', ['js']);
	gulp.watch('src/img/**/*.*', ['images']);
});

gulp.task('default', ['js', 'images', 'server', 'watch']);