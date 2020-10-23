var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './__client/src/index.js',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         { test: /\.(js)$/, use: 'babel-loader' },
         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      ]
   },
   mode: 'development',
   plugins: [
      new HtmlWebpackPlugin({
         template: '__client/public/index.html'
      })
   ]

}
