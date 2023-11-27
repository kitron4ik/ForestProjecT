var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Berezka', function(req, res, next) {
  res.render('tree', {
  title: "Березка",
  picture: "images/Berezka.png",
  desc: "Белое дерево в черное пятнышко с вкусным березовым соком"
})
});

router.get('/Elochka', function(req, res, next) {
  res.render('tree', {
    title: "El",
    picture: "images/Elochka.png",
    desc: "Дерево с приятным запахом, вечный гость в новогоднюю ночь!"
  })
});
router.get('/Dubina', function(req, res, next) {
  res.render('tree', {
    title: "Dub",
    picture: "images/Dubina.png",
    desc: "Древнерусское древо, оно могло застать людей в начале нашей эры, так как может жить до 2000 лет !"
  })
});

module.exports = router;
