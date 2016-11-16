let webpack = require('webpack');
let uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let fs = require('fs');

let config = {
    entry: {},
    output: {
        path: __dirname+'/dist/js',
        filename: '[name].js'
    },

    plugins: [
        // js压缩打包工具
        //new uglifyJsPlugin({
        //    compress: {
        //        warnings: true
        //    }
        //})
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?presets[]=es2015'],
            exclude:/node_modules/
        }]
    }
};

/**
 * 读取文件列表名称
 * @param path
 */
let filesObj = {};

function walk(path){
    let dirList = fs.readdirSync(path);
    dirList.forEach(item=>{
        if(fs.statSync(path + '/'+item).isDirectory()){
            walk(path + '/' + item);
        }else{
            //文件相对路径
            //let realPath = path+'/'+item;
            let realPath =  /(.*?)\.js/.exec(path+'/'+item)[1];
            // 获取文件名称去掉js后缀
            let name = /(.*?)\.js/.exec(item)[1];
            filesObj[name] = realPath;
        }
    });
    console.log(filesObj);
    return filesObj;
}

console.log(walk('./js'));

config.entry = Object.assign({},config.entry,walk('./js'));
//console.log(config.entry);
module.exports = config;