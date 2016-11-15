module.exports = {
    //entry: './main.js',
    entry: {
        tjbb: './js/tjbb',
        login: './js/login'
    },
    output: {
        //path: __dirname+'/dist',
        //filename: 'bundle.js'
        path: __dirname+'/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?presets[]=es2015'],
            exclude:/node_modules/
        }]
    }
};