var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Filmes com Tom Hanks' });
});

router.get('/forrest', function(req, res) {
  res.render('forrest');
});

router.get('/castaway', function(req, res) {
  res.render('castaway');
});

router.get('/saving', function(req, res) {
  res.render('saving');
});

router.get('/terminal', function(req, res) {
  res.render('terminal');
});

module.exports = router;
