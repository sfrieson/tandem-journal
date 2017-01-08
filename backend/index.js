var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

if (!process.env.DEVELOPMENT) {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(express.static('dist'));

// Routing
var router = require('./router/index');
app.use('/', router);

app.listen(process.env.PORT, () => console.log('Listening on ' + process.env.PORT));
