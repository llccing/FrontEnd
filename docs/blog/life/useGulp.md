# 前端基础设施(gulp)

[[toc]]

## why

* 自动清除缓存，自动刷新，加速开发调试过程 [browserSync](https://www.browsersync.io/) or [browserSync国内](http://www.browsersync.cn/)

* js代码压缩，节省带宽。

* css文件，加入hash码，方便测试同学测试。（已知情况，js修改不用清缓存，css文件需要）


## 环境搭建

windows环境node安装,
可以参考该[教程](http://www.jianshu.com/p/03a76b2e7e00)，Linux系统可以参考，
[教程一](http://www.jianshu.com/p/bef810c33721),
[教程二](https://blog.gtwang.org/web-development/install-node-js-in-windows-mac-os-x-linux/)

### 注意事项

如果node下载速度过慢，可以考虑使用国内的[node下载站](http://nodejs.cn/download/)。

## gulp

[中文官网](http://www.gulpjs.com.cn/)

### 入门指南

* 全局安装 gulp：

```
$ npm install --global gulp

```

* 作为项目的开发依赖（devDependencies）安装：
```
$ npm install --save-dev gulp
```

* 在项目根目录下创建一个名为 gulpfile.js 的文件：
```
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

```

* 运行 gulp：
```
$ gulp
```


## gulpfile.js文件解析

代码待优化
```js
var gulp = require('gulp');

var del = require('del'); // 文件删除
var browserSync = require('browser-sync'); // server
var gulpSequence = require('gulp-sequence'); // 顺序执行任务
var revCollector = require('gulp-rev-collector'); // 用于生成替换链接的清单文件


// load plugins
var $ = require('gulp-load-plugins')(); // gulp 加载插件

var baseDir = './app'; // 开发目录
var distDir = './'; // ./dist目录与Java配合有问题

// dev-server
gulp.task('server', function () {
    // gulp.run('build');
    browserSync({
        port: 9000,
        /**
         * 代理
         * http: //btzh.net:8093/api/
         * http: //192.168.3.169:8080/housing-security/api/
         */
        // proxy: 'http://btzh.net:8093',
        proxy: 'http://192.168.0.103:8095',
        serveStatic: [baseDir],
        browser: "chrome",
    });

    gulp.watch(baseDir + '/**/*.js').on('change', browserSync.reload);
    gulp.watch(baseDir + '/**/*.html').on('change', browserSync.reload);
    gulp.watch(baseDir + '/img/**/*.*').on('change', browserSync.reload);
    gulp.watch(baseDir + '/css/**/*.css').on('change', browserSync.reload);
});

// 压缩
gulp.task('rjs', function () {
    del(distDir + 'rjs/**/*'); // 删除

    gulp.src(baseDir + '/js/**/*.js')
        .pipe($.plumber())
        .pipe(amdOptimize(baseDir + '/js/index', {
            paths: {
                'jquery': 'static/jQuery/jquery-1.12.3.min',
                'bootstrap': 'static/bootstrap/js/bootstrap.min',
                'bootstrap-table': 'static/bootstrap-table/bootstrap-table.min',
                'bootstrap-table-zh-CN': 'static/bootstrap-table/bootstrap-table-zh-CN.min',
                'bootstrap-table-export': 'static/bootstrap-table/bootstrap-table-export',
                'tableExport': 'static/bootstrap-table/tableExport',
                'bootstrap-datetimepicker': 'static/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
                'bootstrap-datetimepicker-zh-CN': 'static/bootstrap-datetimepicker/js/bootstrap-datetimepicker.zh-CN',
                'treeView': 'static/bootstrap-treeview/bootstrap-treeview.min', // 树形图
                'md5': 'static/md5', // 密码加密
                'validate': 'static/verification/jquery.validate.min', // 表单输入信息验证
                'messages-zh': 'static/verification/messages_zh.min',//表单验证中文提示
                'card': 'static/verification/card', // 身份证号码验证
                'noty': 'static/Noty/jquery.noty.packaged.min', //提示框
                'plupload': 'static/plupload/plupload.full.min', // 图片上传
                'plupload-zh_CN': 'static/plupload/zh_CN',
                'lodash': 'static/lodash/lodash.min',

                'util': 'js/util',
                'component': 'js/component',

                'js': 'js'
            },
            shim: {
                'bootstrap': ['jquery'],
                'bootstrap-table': ['jquery'],
                'treeView': ['jquery'],
                'bootstrap-table-zh-CN': ['bootstrap-table'],
                'bootstrap-table-export': ['bootstrap-table'],
                'bootstrap-datetimepicker': ['jquery'],
                'bootstrap-datetimepicker-zh-CN': ['bootstrap-datetimepicker'],
                'plupload-zh_CN': ['plupload']
            }
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(distDir + '/rjs/dist'))
        .pipe(uglify())
        .pipe(gulp.dest(distDir + '/rjs/uglify'));
});

// js转换压缩
gulp.task('js', function () {
    del(distDir + '/js/**/*'); // 删除

    return gulp.src(baseDir + '/js/**/*.js')
        .pipe($.plumber())
        .pipe($.changed(distDir + '/js'))
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.uglify())
        .pipe(gulp.dest(distDir + '/js'));
});

// page文件处理
gulp.task('page', function () {
    return gulp.src(baseDir + '/page/**/*.*')
        .pipe($.plumber())
        .pipe($.changed(distDir + '/page'))
        .pipe(gulp.dest(distDir + '/page'))
});

// css 处理
gulp.task('css', function () {
    return gulp.src(baseDir + '/css/**/*.css')
        .pipe($.plumber())
        .pipe($.revCollector())
        .pipe($.changed(distDir + '/css'))
        .pipe($.rev())
        .pipe(gulp.dest(distDir + '/css'))
        .pipe($.rev.manifest())        //- 生成一个rev-manifest.json
        .pipe(gulp.dest(distDir + '/css'));//- 将 rev-manifest.json 保存到 rev 目录内
});

// revCss 处理
gulp.task('revcss', function () {
    return gulp.src([distDir + '/css/*.json', distDir + '/*.html'])
    //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())
        //- 执行文件内css名的替换
        .pipe(gulp.dest(distDir))
    //- 替换后的文件输出的目录
});

// static库文件处理
gulp.task('static', function () {
    return gulp.src(baseDir + '/static/**/*')
        .pipe($.plumber())
        .pipe($.changed(distDir + '/static'))
        .pipe(gulp.dest(distDir + '/static'))
});

// 图片资源处理
gulp.task('img', function () {
    return gulp.src(baseDir + '/img/**/*')
        .pipe($.plumber())
        .pipe($.changed(distDir + '/'))
        .pipe(gulp.dest(distDir + '/img'))
});

// json处理
gulp.task('json', function () {
    return gulp.src(baseDir+ '/js/json/**/*.json')
        .pipe($.plumber())
        .pipe($.changed(distDir + '/js/json'))
        .pipe(gulp.dest(distDir + '/js/json'))
});

// 其他文件处理
gulp.task('other', function () {
    gulp.src([baseDir + '/*.html', baseDir + '/*.js'])
        .pipe($.plumber())
        .pipe($.changed(distDir))
        .pipe(gulp.dest(distDir))
});

// clean
gulp.task('clean', function () {
    del(distDir + '/css');
    del(distDir + '/js');
    del(distDir + '/page');
    del(distDir + '/static');
    del(distDir + '/img');
    del(distDir + '/index.html');
    del(distDir + '/login.html');
    del(distDir + 'require.config.js');
});

gulp.task('watch', function () {
    gulp.watch(baseDir + '/**/*', ['build'])
});
// 导报
gulp.task('build', function (cb) {
    gulpSequence(['js', 'page', 'static', 'img', 'other','json'], ['css'], ['revcss'])(cb)
});

// 默认执行任务
gulp.task('default', ['server']);
```

## 开发部署流程



配置好package.json和gulpfile.js文件后。执行

```
npm install 
```

### 注意事项

如果 npm install 时速度过慢，可以翻墙，或者可以用cnpm，（cnpm需要安装，自行Google）。


### 开发：

所有的修改都是在app文件夹内，build后生成编译后的文件。

```
gulp // gulp default
```

### 部署：
```
// 此处可以优化。
gulp clean

gulp build
```

项目目录


![file-structure](./imgs/fileStructure.png)


## <a name="讨论">讨论</a>

### 1. requirejs的使用

	requirejs按需加载，如果需要压缩打包，考虑使用新的写法。

- requirejs demos

	- [Simple one page app](https://github.com/volojs/create-template)
 
	- [Multipage app](https://github.com/requirejs/example-multipage)
 
	- [Multipage app with shim config](https://github.com/requirejs/example-multipage-shim)

- gulp-requirejs

	- [使用gulp自动优化requireJS项目](http://blog.csdn.net/ft6302244/article/details/44308215)

	- [requirejs-example-gulpfile](https://github.com/phated/requirejs-example-gulpfile)


### 2. babel转码，默认打包的文件都是转换过的，所有浏览器加载同样的逻辑文件。

### 3. less, sass等的使用，（大小，色调、字体控制）