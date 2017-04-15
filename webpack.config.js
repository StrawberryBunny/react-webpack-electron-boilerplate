var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: { 
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./app"
    }
};