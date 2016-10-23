const webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
     entry: './index.js',
     output: {
         path: './dist',
         publicPath: "dist/",
         filename: 'bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }],
         query: {
             presets: ['latest', 'react'],
             plugins: ['transform-react-jsx','transform-object-rest-spread']
         }    
     },
     devServer: { inline: true },
     plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ] : [] 
 };
