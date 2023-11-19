var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Berezka', function(req, res, next) {
  res.send("<h1>Березка</h1>")
  });
router.get('/El', function(req, res, next) {
    res.send("<h1>Елка</h1>")
});
router.get('/Dub', function(req, res, next) {
    res.send("<h1>Дуб</h1>")
});
module.exports = router;
