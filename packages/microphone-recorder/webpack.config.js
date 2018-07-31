const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  context: __dirname,
  entry: ['./src/index.js'],
  target: 'node', // exclude modules like path, fs, etc.
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
}
