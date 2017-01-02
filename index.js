var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var pg = new pg.Pool();

const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/create', (req, res) => {
  console.log('posting data', req.body);
  var query = [
    'INSERT INTO posts (account_id, body, created_at)',
    'VALUES ($1, $2, $3)',
    'RETURNING *;'
  ].join(' ');
  var values = [req.body.user, req.body.post, Date.now()];

  pg.connect((err, client, done) => {
    if (err) return res.status(500).send(err);
    client.query(query, values, (err, result) => {
      if (err) return res.status(500).send(err);
      console.log(result.rows[0]);
      res.send(JSON.stringify(result.rows[0]));
      done();
    });
  });
});
app.get('/posts', (req, res) => {
  var query = [
    'SELECT * FROM posts',
    'INNER JOIN accounts ON (posts.account_id = accounts.id);'
  ].join(' ');
  pg.connect((err, client, done) => {
    if (err) return res.status(500).send(err);

    client.query(query, (err, response) => {
      if (err) { console.log('post query', err); return res.status(500).send(err); }
      console.log(response.rows);
      res.send(JSON.stringify(response.rows));
      done();
    });
  });
});
app.get('/', (req, res) => {
  res.send('index');
});

app.listen(3000, () => console.log('Listening on 3000'));
