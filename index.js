var express = require('express');
// var webpackMiddleware = require('webpack-dev-middleware');
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config.js');

const app = express();
// app.use(webpackMiddleware(webpack(webpackConfig), {publicPath: 'dist'}));
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send("index");
});

app.listen(3000, () => console.log('Listening on 3000'));
