/*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var amdOptimize = require('amd-optimize');
//压缩
gulp.task('minify-css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css/'));
});
//
gulp.task('script', function () {
    gulp.src(['js/**/*.js'])
        .pipe(amdOptimize('js/a',{
            //require config
            paths:{
                "a":"a",
                "jquery":"jquery-1.12.3.min",
                "b":"b",
                'module':'module'
            }
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('default',['minify-css','script']); 