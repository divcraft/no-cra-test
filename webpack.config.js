const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
   entry: './__client/src/index.js',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[hash:6].min.js'
   },
   module: {
      rules: [
         {
            test: /\.(js)$/,
            use: {
               loader: 'babel-loader',
            }
         },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },
         {
            test: /\.(png|jpg|jpe?g|gif)$/i,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[hash:6].[ext]',
                  outputPath: 'images',
                  publicPath: 'images',
                  emitFile: true,
                  esModule: false
               }
            }
         }
      ]
   },
   mode: 'development',
   plugins: [
      new HtmlWebpackPlugin({
         template: '__client/public/index.html',
         favicon: '__client/public/favicon.ico',
         inject: 'body',
      }),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new UglifyJsPlugin({
            include: /\.min\.js$/,
            uglifyOptions: {
               output: {
                  comments: false
               }
            }
         })
      ]
   }
}
