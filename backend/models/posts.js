var mo = require('moment');
var pg = require('pg');
require('dotenv').config();
if (!process.env.DEVELOPMENT) pg.defaults.ssl = true;

// pg = new pg.Pool();
var connect = process.env.DEVELOPMENT ? pg.connect.bind(pg)
: function (cb) {
  return pg.connect(process.env.DATABASE_URL, cb);
};

const SELECT = 'SELECT posts.year, posts.month, posts.date, name, body, question FROM posts';
module.exports = {
  getAll: function (limit) {
    limit = limit || 50;
    var query = [
      SELECT,
      'INNER JOIN accounts ON posts.account_id = accounts.id',
      'FULL OUTER JOIN questions ON posts.question_id = questions.id',
      'ORDER BY year DESC, month DESC, date DESC, name ASC',
      'LIMIT ' + limit
    ].join(' ') + ';';
    return new Promise((resolve, reject) => {
      connect((err, client, done) => {
        if (err) {
          reject(err);
          done();
        } else {
          client.query(query, (err, res) => {
            if (err) {
              return reject(err);
              done();
            }
            resolve(res.rows);
            done();
          });
        }
      });
    });
  },
  getPastYears: function (user) {
    var today = mo();
    return this.getDate({month: today.month(), date: today.date()}, user);
  },
  getRecent: function (num, user) {
    // num = num || 2;
    // var ago = mo().week(-num);

    return this.getAll(28, user);
  },
  getDate: function (date, account) {
    account = account || false;
    var inputCount = 0;
    var query = [
      SELECT,
      'INNER JOIN accounts ON (posts.account_id = accounts.id)',
      'FULL OUTER JOIN questions ON posts.question_id = questions.id',
      'WHERE ' +
      Object.keys(date).map(key => 'posts.' + key + ' = $' + (++inputCount)).join(' AND '),
      account !== false ? 'AND account_id = $' + (++inputCount) : '',
      'ORDER BY year DESC, month DESC, date DESC, name ASC'
    ].join(' ') + ';';
    var values = Object.keys(date)
    .reduce((values, key) => {
      values.push(date[key]);
      return values;
    }, []);

    if (account !== false) values.push(account);
    return new Promise((resolve, reject) => {
      connect((err, client, done) => {
        if (err) {
          reject(err);
          done();
        }
        else client.query(query, values, (err, res) => {
          if (err) return reject(err);
          resolve(res.rows);
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
      connect((err, client, done) => {
        if (err) {
          reject(err);
          done();
        }
        else client.query(query, values, (err, result) => {
          if (err) return reject(err);
          resolve(JSON.stringify(result.rows[0]));
          done();
        });
      });
    });
  }
};
