var mo = require('moment');
var pg = require('pg');
pg = new pg.Pool();

module.exports = {
  getAll: function () {
    var query = [
      'SELECT * FROM posts',
      'INNER JOIN accounts ON (posts.account_id = accounts.id)',
      'ORDER BY year DESC, month DESC, day DESC, name ASC;'
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
  getPastYears: function (user) {
    var today = mo();
    return this.getDate({ month: today.month(), date: today.date()}, user);
  },
  getDate: function (date, account) {
    account = account || false;
    var inputCount = 0;
    var query = [
      'SELECT * FROM posts WHERE',
      Object.keys(date).map(key => key + ' = $' + (++inputCount)).join(' AND '),
      account !== false ? 'AND account_id = $' + (++inputCount) : '',
      ';'
    ].join(' ');
    var values = Object.keys(date)
    .reduce((values, key) => {
      values.push(date[key]);
      return values;
    }, []);

    if (account !== false) values.push(account);

    return new Promise((resolve, reject) => {
      pg.connect((err, client, done) => {
        if (err) reject(err);
        console.log(query, values);
        client.query(query, values, (err, res) => {
          if (err) reject(err);
          resolve(JSON.stringify(res.rows));
          done();
        });
      });
    });
  },
  create: function (data) {
    var query = [
      'INSERT INTO posts (account_id, body, year, month, day)',
      'VALUES ($1, $2, $3, $4, $5)',
      'RETURNING *;'
    ].join(' ');
    var now = mo();
    var values = [data.user, data.post, now.year(), now.month(), now.date()];

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
