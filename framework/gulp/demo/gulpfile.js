/*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//压缩
gulp.task('minify-css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css/'));
});
//
gulp.task('script', function () {
    gulp.src(['src/a.js',"src/b.js"])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('default',['minify-css','script']); 