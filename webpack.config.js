const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
  content: srcPath,
  entry: path.join(srcPath, 'js', 'client.jsx'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
