var config = {
    entry: './main.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};

module.exports = config;