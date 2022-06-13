const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../index.js'),
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name]-[contenthash].js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ]
        }
      }
    }],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  },
  devServer: {
    host: '0.0.0.0',
    static: path.join(__dirname, '../dist'),
    compress: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
}