var config = {
    entry:'./main.js',
    output:{
        fileName: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }
        ]
    }
};

module.exports = config;

