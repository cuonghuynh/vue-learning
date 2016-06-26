'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var fs = require("fs");
var browserify = require('browserify');
var vueify = require('vueify');
var notify = require("gulp-notify");

/*----------  Config settings  ----------*/

var config = {
	sassPath: './assets/scss',
	jsPath: './assets/js',
	cssPath: './assets/css',
	moduleDir: './node_modules',
	jsDistPath: './public/js',
	cssDistPath: './public/css',
	fontDistPath: './public/fonts'
}
 
/*----------  Define tasks  ----------*/

gulp.task('vueify', function () {
  	browserify(config.jsPath + '/vue_app.js')
		.transform(vueify)
	 	.bundle()
	  	.pipe(fs.createWriteStream(config.jsDistPath + '/app.js')
	  		.on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })));
});

gulp.task('sass', function () {
	return gulp.src(config.sassPath + '/*.scss')
		.pipe(sass()
			.on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
		.pipe(gulp.dest(config.cssDistPath + '/css'));
});

/*----------  Define watch  ----------*/

gulp.task('watch', function () {
  	gulp.watch(config.sassPath + '/*.scss', ['sass']);
  	gulp.watch(config.jsPath + '/vue_app.js', ['vueify']);
});

gulp.task('default', ['sass', 'vueify']);