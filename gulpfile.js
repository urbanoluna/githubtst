'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass');

/***************** JavaScript Tasks *****************/

gulp.task('concatScripts', function(){
    return gulp.src([
            'js/jquery-1.12.4.js',
            'js/bootstrap.js'        
        ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))    
});

gulp.task('minifyScripts', ['concatScripts'], function(){
    return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'))    
});

/***************** Compiling Sass *****************/

gulp.task('compileSass', function(){
    return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))    
});

gulp.task('watchSass', function(){
    gulp.watch(['sass/**'], ['compileSass'])    
});



gulp.task('build', ['minifyScripts', 'compileSass']);
gulp.task('default', ['build']);