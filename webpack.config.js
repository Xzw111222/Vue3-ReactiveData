const HtmlWebpackPlugin  = require('html-webpack-plugin'),
      { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html')
    })
  ],
  devServer: {
    contentBase: './',
    open:true,
    port: 3344
  }
}