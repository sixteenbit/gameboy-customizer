// GULP PACKAGES
// Most packages are lazy loaded
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	filter = require('gulp-filter'),
	plugin = require('gulp-load-plugins')();


// GULP VARIABLES
// Modify these variables to match your project needs

// Select Foundation components, remove components project will not use
const SOURCE = {

	// Scss files will be concantonated, minified if ran with --production
	styles: 'assets/scss/**/*.scss',

	html: '**/*.html'
};

const ASSETS = {
	styles: 'assets/css/',
	scripts: 'assets/js/',
	images: 'assets/img/',
	all: 'assets/'
};

// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript

// Compile Sass, Autoprefix and minify
gulp.task('styles', function () {
	return gulp.src(SOURCE.styles)
		.pipe(plugin.plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass())
		.pipe(plugin.autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 9',
				'ios >= 7'
			],
			cascade: false
		}))
		.pipe(plugin.cssnano())
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.styles))
});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function () {

	// Watch .scss files
	gulp.watch(SOURCE.styles, gulp.parallel('styles'));

});

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles'));
