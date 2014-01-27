var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('default', function() {
    gulp.src('./scss/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            sass: '/scss',
            css: 'assets/css/app'
        }))
        .pipe(gulp.dest('assets/css/app'));
});
