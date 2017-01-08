var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
require('dotenv').config();
const app = express();
if (!process.env.DEVELOPMENT) app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

// Routing
var router = require('./router/index');
app.use('/', router);

app.listen(3000, () => console.log('Listening on 3000'));
