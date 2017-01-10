const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
  content: srcPath,
  // entry: path.join(srcPath, 'js', 'client.jsx'),
  entry: ['whatwg-fetch', path.join(srcPath, 'js', 'client.jsx')],
  output: {
    path: path.join(buildPath, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
