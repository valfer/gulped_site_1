var gulp = require('gulp');

// instantiate the helpers
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

// list of files source for the task
var css_files = [
 'css/base.css',
 'css/dark-theme.css',
 'css/layout.css',
 'css/module.css',
 'css/state.css'
];

// the task
gulp.task('default', function() {
 return gulp.src(css_files)	// the source
 .pipe(cleanCSS())
 .pipe(concat('all.css'))	// concat
 .pipe(gulp.dest('css'))	// output to this folder
});