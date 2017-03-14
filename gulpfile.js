var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var minifycss	= require('gulp-minify-css');
var browserSync = require('browser-sync').create();

// Sass Task
gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
		.pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
		.pipe(browserSync.stream());
});

// BrowserSync Server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Default
gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
	gulp.watch('*.html').on('change', browserSync.reload);
});
