var pg = require('pg');

pg = new pg.Pool();

module.exports = {
  getAll: function () {
    var query = [
      'SELECT * FROM posts',
      'INNER JOIN accounts ON (posts.account_id = accounts.id);'
    ].join(' ');
    return new Promise((resolve, reject) => {
      pg.connect((err, client, done) => {
        if (err) reject(err);
        client.query(query, (err, res) => {
          if (err) reject(err);
          resolve(JSON.stringify(res.rows));
          done();
        });
      });
    });
  },
  create: function (data) {
    var query = [
      'INSERT INTO posts (account_id, body, created_at)',
      'VALUES ($1, $2, $3)',
      'RETURNING *;'
    ].join(' ');
    var values = [data.user, data.post, Date.now()];

    return new Promise((resolve, reject) => {
      pg.connect((err, client, done) => {
        if (err) reject(err);
        client.query(query, values, (err, result) => {
          if (err) reject(err);
          resolve(JSON.stringify(result.rows[0]));
          done();
        });
      });
    });
  }
};
