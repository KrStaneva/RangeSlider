var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('content/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('content/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('content/sass/*.scss',['styles']);
});