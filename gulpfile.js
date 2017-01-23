var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//server
gulp.task('serv', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
		port: 8080,
      open: true
    }));  
});

//sass compile & autoprefixer
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

//watch on sass changes
gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', ['style']);
});

gulp.task('default', ['serv', 'watch']);