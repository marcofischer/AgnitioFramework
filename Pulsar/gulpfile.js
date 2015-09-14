/* Declare packages */

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
 	prefix = require('gulp-autoprefixer'),
    uglifycss = require('gulp-uglifycss');
//

// Uglifies

gulp.task('compress', function() {
  return gulp.src('code/build/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('code/js'));
});

// Styles Task

gulp.task('css', function () {
  gulp.src('code/build/css/*.css')
    .pipe(uglifycss({
//      max-line-len: 80
    }))
    .pipe(gulp.dest('code/css/'));
});


// Watch Task

gulp.task('watch', function() {

  gulp.watch('code/build/js/*.js', ['compress']);
	gulp.watch('code/build/css/*.css', ['css'])

});


// Default Task

gulp.task('default', ['compress', 'css', 'watch']);