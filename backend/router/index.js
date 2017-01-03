var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');

router.get('/', (req, res) => {
  res.send('index');
});

router.route('/api/posts')
.post((req, res) => {
  console.log('posting data', req.body);
  Posts.create(req.body)
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err));
})
.get((req, res) => {
  console.log('getting all posts');
  Posts.getAll()
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err));
});

router.get('/api/posts/past-years', (req, res) => {
  Posts.getPastYears()
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err));
});

module.exports = router;
