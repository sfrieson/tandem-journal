var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var client = new pg.Client();

const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/create', (req, res) => {
  console.log('posting data', req.body);
  client.connect(err => {
    if (err) return res.status(500).send(err);
    var query = [
      'INSERT INTO posts (account_id, body, created_at)',
      'VALUES ($1, $2, $3)',
      'RETURNING *;'
    ].join(' ');

    client.query(query, [req.body.user, req.body.post, Date.now()], (err, response) => {
      if (err) return res.status(500).send(err);
      console.log(response.rows[0]);
      res.send(JSON.stringify(response.rows[0]));
      client.end(err => { if (err) throw err; });
    });
  });
});
app.get('/posts', (req, res) => {
  client.connect(err => {
    if (err) return res.status(500).send(err);
    var query = [
      'SELECT * FROM posts',
      'INNER JOIN accounts ON (posts.account_id = accounts.id);'
    ].join(' ');

    client.query(query, (err, response) => {
      if (err) return res.status(500).send(err);
      console.log(response.rows);
      res.send(JSON.stringify(response.rows));
      client.end(err => { if (err) throw err; });
    });
  });
});
app.get('/', (req, res) => {
  res.send('index');
});

app.listen(3000, () => console.log('Listening on 3000'));
