var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/create', (req, res) => {
  console.log('posting data', req.body);
  res.send('success');
});
app.get('/', (req, res) => {
  res.send('index');
});

app.listen(3000, () => console.log('Listening on 3000'));
