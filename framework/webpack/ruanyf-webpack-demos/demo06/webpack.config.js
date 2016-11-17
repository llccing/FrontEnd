var config  ={
    entry: './main.jsx',
    output:{
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                // loader的执行方式是从右向左
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
};

// 此处容易忘记写
module.exports = config;