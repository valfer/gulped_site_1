var gulp = require('gulp');

// instantiate the helpers
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var fs = require('fs');

// list of files source for the task
var css_files = [
 'css/base.css',
 'css/dark-theme.css',
 'css/layout.css',
 'css/module.css',
 'css/state.css'
];

// the task
checkFiles(css_files);
gulp.task('css_build', function() {
 return gulp.src(css_files)	// the source
 .pipe(cleanCSS())
 .pipe(concat('all.css'))	// concat
 .pipe(gulp.dest('css'))	// output to this folder
});

//===== utils
function checkFiles(pathsList) {

    var totPaths = pathsList.length;
    for (var i = 0; i < totPaths; i++) {
        var path = pathsList[i];
        fs.stat(path, function (err, stat) {
            if (err != null) {
                console.log("ERROR ON PATH: '" + err.path + "' ----> " + err.code);
            }
        });
    }
}